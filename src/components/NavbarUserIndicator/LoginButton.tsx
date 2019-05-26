import React from "react";
import { Button } from "antd";
import { useStore } from "simstate";
import { UiStore } from "../../stores/UiStore";
import Loadable from "react-loadable";
import Loading from "../Loading";

const AsyncLoginModal = Loadable({
  loader: () => import("../LoginRegister/LoginModal"),
  loading: Loading
});

const AsyncRegisterModal = Loadable({
  loader: () => import("../LoginRegister/RegisterModal"),
  loading: Loading
});


interface Props {

}

const LoginButton: React.FunctionComponent = (props) => {
  const uiStore = useStore(UiStore);

  return (
    <>
    <Button onClick={uiStore.toggleLoginModalShown}>
      登录
    </Button>
    <AsyncLoginModal />
    <AsyncRegisterModal />
    </>
  )

};

export default LoginButton;
