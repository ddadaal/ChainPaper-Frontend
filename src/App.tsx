import React from 'react';
import {Router} from "@reach/router";
import Home from './pages/Home';
import Loadable from "react-loadable";
import {Spin} from 'antd';
import PaperUploadPage from "./pages/PaperUploadPage";

const AsyncAnotherPage = Loadable({
  loader: () => import("./pages/AnotherPage"),
  loading: () => <p>loading</p>
});

function App() {
  return (
    <Router>
      {/*<Home path="/"/>*/}
      <AsyncAnotherPage path="/another"/>
      <PaperUploadPage path="/"/>
    </Router>
  );
}

export default App;
