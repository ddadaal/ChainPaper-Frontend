import React from "react";
import Header from "../components/Header";
import Loadable from "react-loadable";
import Loading from "../components/Loading";
import styled from "styled-components";
import { layoutConstants } from "./constants";
import { Layout as AntdLayout } from "antd";
import Footer from "../components/Footer";


const CenterContent = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${layoutConstants.maxWidth}px;
`;

const RootLayout: React.FunctionComponent = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
};

export default RootLayout;
