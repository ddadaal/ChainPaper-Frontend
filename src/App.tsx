import React from 'react';
import { Router } from "@reach/router";
import Home from './pages/Home';
import Loadable from "react-loadable";
import { Spin } from 'antd';

const AsyncAnotherPage = Loadable({
  loader: () => import("./pages/AnotherPage"),
  loading: () => <p>loading</p>
});

function App() {
  return (
    <Router>
      <Home path="/" />
      <AsyncAnotherPage path="/another" />
    </Router>
  );
}

export default App;
