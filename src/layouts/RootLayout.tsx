import React from "react";
import Header from "../components/Header";
import Loadable from "react-loadable";
import Loading from "../components/Loading";

const AsyncLoginModal = Loadable({
  loader: () => import("../components/LoginRegister/LoginModal"),
  loading: Loading
});

const RootLayout: React.FunctionComponent = (props) =>{
  return (
    <div>
      <Header />
      {props.children}
      <AsyncLoginModal />
    </div>
  )
};

export default RootLayout;
