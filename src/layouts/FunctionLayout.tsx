import React from "react";
import { Layout as AntdLayout } from "antd";
import styled from "styled-components";
import { layoutConstants } from "./constants";

const { Content } = AntdLayout;

interface Props {

}

const Layout = styled(AntdLayout)`
  @media (min-width: ${layoutConstants.paddingBreakpoint}px) {
   padding: 0 8px 8px;
  }
`;

const styleContent = {
  padding: 8,
  margin: 30,
  minHeight: 800,
  background: "#FFFFFF",
};


const FunctionLayout: React.FC = (props) => {
  return (
    <Layout>
      <Content style={styleContent}>
        {props.children}
      </Content>
    </Layout>
  );

}

export default FunctionLayout;
