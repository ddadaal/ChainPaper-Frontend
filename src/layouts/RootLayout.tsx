import React from "react";
import Header from "../components/Header";
import Loadable from "react-loadable";
import Loading from "../components/Loading";

const RootLayout: React.FunctionComponent = (props) =>{
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
};

export default RootLayout;
