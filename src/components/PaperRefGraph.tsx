import React, { useRef, useEffect } from "react";
import { PaperRef } from "../models/paper";

interface Props {
  refs: PaperRef[];
}

const SENSITIVITY = 100;
const SIBLINGS_LIMIT = 10;
const DENSITY = 50;
const NODES_QTY = 0;
const ANCHOR_LENGTH = 20;
const MOUSE_RADIUS = 200;
const circ = 2 * Math.PI;

class Node {
  anchorX: number;
  anchorY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  energy: number;
  radius: number;
  siblings: Node[];
  brightness: number;
  ctx: CanvasRenderingContext2D;

  constructor(x: number, y: number, siblings: Node[], ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.anchorY = y;
    this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
    this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.energy = Math.random() * 100;
    this.radius = Math.random() * 2;
    this.siblings = siblings;
    this.brightness = 0;
    this.ctx = ctx;
  }

  drawNode() {
    var color = "rgba(255, 0, 0, " + 0.8 + ")";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 2 * this.radius + 2 * this.siblings.length / SIBLINGS_LIMIT, 0, circ);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  drawConnections() {
    for (var i = 0; i < this.siblings.length; i++) {
      var color = "rgba(255, 0, 0, " + this.brightness + ")";
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
    }
  }

  moveNode() {
    this.energy -= 2;
    if (this.energy < 1) {
      this.energy = Math.random() * 100;
      if (this.x - this.anchorX < -ANCHOR_LENGTH) {
        this.vx = Math.random() * 2;
      } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
        this.vx = Math.random() * -2;
      } else {
        this.vx = Math.random() * 4 - 2;
      }
      if (this.y - this.anchorY < -ANCHOR_LENGTH) {
        this.vy = Math.random() * 2;
      } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
        this.vy = Math.random() * -2;
      } else {
        this.vy = Math.random() * 4 - 2;
      }
    }
    this.x += this.vx * this.energy / 100;
    this.y += this.vy * this.energy / 100;
  }
}

const PaperRefGraph: React.FC<Props> = (props) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) { return; }
    let mouse = {} as any;

    let nodes = [] as Node[];

    const canvas = ref.current;
    resizeWindow();
    const ctx = canvas.getContext('2d')!!;

    if (!ctx) {
      alert("Ooops! Your browser does not support canvas :'(");
    }


    function initNodes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes = [new Node(canvas.width / 2, canvas.height / 2, getSiblings(props.refs, canvas.width / 2, canvas.height / 2), ctx)];
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    function getSiblings(refs, parentPositionX, parentPositionY) {
      if (!refs || refs.length == 0) {
        return [];
      }
      var thisSiblings = [] as Node[];
      for (var i = 0; i < refs.length; i++) {
        var positionX = parentPositionX + getRandomInt(100) + 10;
        var positionY = parentPositionY + getRandomInt(100) + 10;
        if (refs[i].type === "published") {
          thisSiblings.push(
            new Node(positionX, positionY, [], ctx)
          )
        } else {
          thisSiblings.push(
            new Node(positionX, positionY, getSiblings(refs[i].refs, positionX, positionY), ctx)
          )
        }
      }
      return thisSiblings;
    }

    function drawNode(node) {
      node.drawNode();
      node.drawConnections();
      for (var i = 0; i < node.siblings.length; i++) {
        node.siblings[i].brightness = Math.random() + 0.3;
        drawNode(node.siblings[i]);
      }
    }

    function redrawScene() {
      resizeWindow();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var i, node;
      for (i = 0; i < nodes.length; i++) {
        nodes[i].brightness = Math.random() + 0.3;
        drawNode(nodes[i]);
      }
      // for (i = 0; i < NODES_QTY; i++) {
      //   node = nodes[i];
      //   distance = calcDistance({
      //     x: mouse.x,
      //     y: mouse.y
      //   }, node);
      //   if (distance < MOUSE_RADIUS) {
      //     node.brightness = 1 - distance / MOUSE_RADIUS;
      //   } else {
      //     node.brightness = 0;
      //   }
      // }
      requestAnimationFrame(redrawScene);
    }

    function initHandlers() {
      document.addEventListener('resize', resizeWindow, false);
      canvas.addEventListener('mousemove', mousemoveHandler, false);
      // canvas.addEventListener('mouseover', function (e) {
      //   if (isInPath(e.offsetX, e.offsetY)) {
      //     console.log('hello')
      //   }
      // }, false
      // )
    }

    function mousemoveHandler(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }


    function resizeWindow() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function isInPath(x, y) {
      const r = 1;
      ctx.beginPath();
      ctx.arc(r, r, r, 0, Math.PI * 1);
      return ctx.isPointInPath(x, y)
    }

    initHandlers();
    initNodes();
    redrawScene();

    return () => {
      document.removeEventListener("resize", resizeWindow, false);
      canvas.removeEventListener("mousemove", mousemoveHandler, false);
    };
  }, [props.refs]);

  return (
    <canvas ref={ref} />
  );
};

export default PaperRefGraph;
