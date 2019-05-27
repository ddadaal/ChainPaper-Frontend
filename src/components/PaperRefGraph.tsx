import React, { useRef, useEffect } from "react";
import { PaperRef, PaperRefGraph as PaperRefGraphDS, PaperRefGraphNode, PaperRefGraphEdge } from "../models/paper";
import { Tree } from "antd";

interface Props {
  refs: PaperRef[];
  onSelect(ref: PaperRef): void;
}

function createTreeNode(refs: PaperRef[]) {
  if (!refs) { return []; }
  return refs.map((ref) => {
    return (
      <Tree.TreeNode title={ref.title} key={JSON.stringify(ref)}>
        {createTreeNode(ref.refs)}
      </Tree.TreeNode>

    )
  });
}


const PaperRefGraph: React.FC<Props> = (props) => {
  console.log(props.refs);
  // process data
  // const graph = convert(props.refs);

  return (
    <Tree onSelect={(selectedKeys) => props.onSelect(JSON.parse(selectedKeys[0]))} defaultExpandAll={true} showLine={true}>
      {createTreeNode(props.refs)}
    </Tree>
  );
};

export default PaperRefGraph;
