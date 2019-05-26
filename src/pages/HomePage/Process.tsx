import React from "react";
import BigContainer from "./BigContainer";
import G6 from "@antv/g6";
import "@antv/g6/build/plugin.tool.tooltip";
import "@antv/g6/build/plugin.layout.dagre";
import MediaQuery from "react-responsive";
import { Timeline, Popover } from "antd";
import styled from "styled-components";
import CenterContainer from "./CenterContainer";
import HorizontalTimeline from "react-horizontal-timeline";
import { range } from "../../utils";

interface Props {

}

const process = [
  {name: "注册", description: "学生注册一个网站账户"},
  {name: "上传论文", description: "上传你的论文"},
  {name: "查看用户评论", description: "查看用户对你的论文的评价"},
  {name: "邀请合作", description: "邀请他人一起完善论文"},
];

//
const data = {
  nodes: process.map((x, i) => ({
    id: i,
    name: x.name,
    description: x.description,
    // y: 100,
    // x: (i + 1) * 100,
  })),
  edges: range(0, 4).map((x) => ({
    source: x,
    target: x + 1,
  })),
};

G6.registerNode("rect", {
  draw(item) {
    const group = item.getGraphicGroup();
    const html = G6.Util.createDOM(
      `<div class="ant-card ant-card-bordered" style="width: 300px;"><div class="ant-card-body"><p>${item.name}</p></div></div>`,
    );
    return group.addShape("dom", {
      attrs: {
        x: 0,
        y: 0,
        width: 300,
        height: 88.75,
        html,
      },
    });
  },
});

function PopoverCard(content: string) {
  return `<div class="ant-popover-content">
<div class="ant-popover-arrow"></div><div class="ant-popover-inner"><div><div class="ant-popover-inner-content"><div><p>${content}</p></div></div></div></div></div>`;
}

// const data = {
//   nodes: [{
//     id: "node1",
//     x: 100,
//     y: 200,
//   }, {
//     id: "node2",
//     x: 300,
//     y: 200,
//   }],
//   edges: [{
//     id: "edge1",
//     target: "node2",
//     source: "node1",
//   }],
// };

const Container = styled.div`

  #vertical {
    display: block;
  }
  
  #horizontal {
    display: none;
  }

  @media (min-width: 600px) {
    #vertical {
      display: none;
    }
    
    #horizontal {
      display: block;
    }
  }
`;

function createGraph(isVertical: boolean) {
  const graph = new G6.Graph({
    container: isVertical ? "vertical" : "horizontal",
    height: 450, // 画布高
    fitView: "tc",
    renderer: "svg",
    plugins: [
      new G6.Plugins["tool.tooltip"]({
        getTooltip({item}) {
          const model = item.getModel();
          return PopoverCard(model.description);
        },
      }),
      isVertical ? new G6.Plugins["layout.dagre"]() : null,
    ].filter((x) => !!x),
    defaultIntersectBox: "rect", // 使用矩形包围盒,
  });

  graph.edge({
    style: {
      endArrow: true,
    },
  });

  graph.node({
    shape: "rect",
    label(model) {
      return model.name;
    },

  });

  graph.on("afterchangesize", (e) => {
    graph.setFitView("tc");
  });

  graph.read(data);

  // return graph;
}

// export default class Process extends React.Component<Props> {
//
//   // componentDidMount() {
//   //
//   //   createGraph(true);
//   //   createGraph(false);
//   //
//   // }
//
//   // componentWillUnmount() {
//   //
//   // }
//
//   render() {
//     return <BigContainer title={"系统流程"}>
//       {/*<Container>*/}
//         {/*<div id={"vertical"}/>*/}
//         {/*<div id={"horizontal"}/>*/}
//       {/*</Container>*/}
//       <CenterContainer>
//       <Timeline>
//         { data.nodes.map((x, i) => (
//           <Timeline.Item key={i}>
//             <Popover content={<p>{x.description}</p>} placement={"right"}>
//               <p>{x.name}</p>
//             </Popover>
//           </Timeline.Item>
//         ))}
//       </Timeline>
//       </CenterContainer>
//     </BigContainer>;
//   }
//
// }

interface State {
  index: number;
}

const dummyDate = process.map((x, i) => `1900-01-0${i + 1}`);

function getLabel(date: string) {
  const index = Number(date.split("-")[2]) - 1;
  const p = process[index];
  return <Popover content={p.description} placement={"bottom"} overlayStyle={{ paddingTop: "24px" }}>
    {process[index].name}
  </Popover>;
}

export default class Process extends React.PureComponent<{}, State> {

  state = {
    index: 0,

  };

  indexClick = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const {index} = this.state;
    return <div style={{
      paddingTop: "20px",
      paddingBottom: "40px",
    }}>
    <BigContainer title={"系统流程"}>
      <div style={{width: "100%", height: "100px", marginLeft: "auto", marginRight: "auto", maxWidth: "1250px"
      }}>

        <HorizontalTimeline
          index={index}
          indexClick={this.indexClick}
          values={dummyDate}
          getLabel={getLabel}
          isOpenEnding={false}
          isOpenBeginning={false}
          labelWidth={120}
          // linePadding={32}
          styles={{background: "#f8f8f8", foreground: "#4190FD", outline: "#dfdfdf"}}
        />
      </div>
      <div className="text-center">
      {/* any arbitrary component can go here */}
      <p>{process[index].description}</p>
      </div>
    </BigContainer></div>;
  }
}
