import React, { useRef, useEffect } from "react";
import { PaperRef, PaperRefGraph as PaperRefGraphDS, PaperRefGraphNode, PaperRefGraphEdge, getRefId } from "../models/paper";
import { Tree } from "antd";

interface Props {
  refs: PaperRef[];
  onSelect(ref: PaperRef): void;
}

function createTreeNode(refs: PaperRef[]) {
  if (!refs) { return []; }
  return refs.map((ref) => {
    return (
      <Tree.TreeNode title={ref.type === "chainpaper" ? ref.title : ref.doi} key={getRefId(ref)}>
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
    <Tree onSelect={(selectedKeys) => props.onSelect(props.refs.find((ref) => getRefId(ref) === selectedKeys[0])!!)}
      defaultExpandAll={true} showLine={true}>
      {createTreeNode(props.refs)}
    </Tree>
  );
};

export default PaperRefGraph;
