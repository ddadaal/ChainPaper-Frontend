import React from "react";
import { Button } from "antd";
import { useStore } from "simstate";
import { UiStore } from "../../stores/UiStore";
import Loadable from "react-loadable";
import Loading from "../Loading";

interface Props {

}

const LoginButton: React.FunctionComponent = (props) => {
  const uiStore = useStore(UiStore);

  return (
    <Button onClick={uiStore.toggleLoginModalShown}>
      登录
    </Button>
  )

};

export default LoginButton;
