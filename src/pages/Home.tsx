import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { Button } from "antd";
import RootLayout from "../layouts/RootLayout";

const Home: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <RootLayout>
      <Button onClick={() => navigate("/another")}>Hello From Antd! Click to another page.</Button>
    </RootLayout>
  );
};

export default Home;
