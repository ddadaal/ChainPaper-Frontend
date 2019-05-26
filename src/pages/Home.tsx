import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { Button } from "antd";
import RootLayout from "../layouts/RootLayout";

const Home: React.FunctionComponent<RouteComponentProps> = () => {
  return (
      <Button onClick={() => navigate("/another")}>Hello From Antd! Click to another page.</Button>
  );
};

export default Home;
