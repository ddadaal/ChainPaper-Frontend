import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { Button } from "antd";
import RootLayout from "../layouts/RootLayout";

const AnotherPage: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <RootLayout>
      <Button onClick={() => navigate("/")}>Hello From Antd in AnotherPage!</Button>

    </RootLayout>
  );
};

export default AnotherPage;
