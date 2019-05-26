import React, {useRef, useState} from "react";
import {RouteComponentProps, navigate} from "@reach/router";
import Wizard from "./PaperEditing/Wizard";
import {message} from "antd";
import {getApiService} from "../apis";
import {PaperService} from "../apis/paper/PaperService";
import Query from "../apis/Query";
import PageLoading from "../components/PageLoading";

const PaperUploadPage: React.FunctionComponent<RouteComponentProps> = () => {
  const paperService = getApiService(PaperService);

  return (
    <div>
      <Wizard paperDraft={null} onSubmit={async (paperDraft) => {
        try {
          const res = await paperService.uploadPaper(paperDraft);
          message.success("提交成功");
          navigate(`/papers/${res.paperId}`);
        } catch (e) {
          message.error("提交失败");
        }
      }}/>
      <Query call={() => {
        const canvasContainer = document.getElementById('mainCanvas');
        const canvas = document.createElement("canvas") //获取渲染器的画布元素
        if (canvasContainer) {
          canvasContainer.appendChild(canvas); //将画布写入html元素中
        }
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");
          (function () {
            Object.getPrototypeOf(ctx).Triangle = function (x, y, r) {
              this.save();
              this.translate(x, y);
              this.rotate(r);
              this.beginPath();
              this.moveTo(0, 0);
              this.lineTo(10, 0);
              this.lineTo(0, 10);
              this.lineTo(-10, 0);
              this.closePath();
              this.fill();
              this.restore();
            }
            Object.getPrototypeOf(ctx).line = function (x, y, x1, y1) {
              this.save();
              this.beginPath();
              this.moveTo(x, y);
              this.lineTo(x1, y1);
              this.stroke();
              this.restore();
            }
          })();
          if (ctx) {
            ctx.strokeStyle = "#7C8B8C";
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(90, 130);
            ctx.lineTo(320, 210);
            ctx.stroke();
            ctx.restore();
            // ctx.line(90, 130, 320, 210);
            // ctx.Triangle(320, 210, -Math.PI * .4);
          }
        }
        return paperService.getPaper("123");
      }}>
        {(data, loading) => {
          if (loading) {
            return <PageLoading/>;
          }
          return (
            <canvas ref={this.canvas} width="780" height="1800">
              您的浏览器不支持canvas，请更换浏览器.
            </canvas>
          )
        }}
      </Query>
    </div>
  );
};
export default PaperUploadPage;
