import React, { useRef, useState } from 'react';
import { Router } from "@reach/router";
import Home from './pages/Home';
import Loadable from "react-loadable";
import { Spin } from 'antd';
import { StoreProvider } from 'simstate';
import { UiStore } from './stores/UiStore';
import { UserStore } from './stores/UserStore';

const AsyncAnotherPage = Loadable({
  loader: () => import("./pages/AnotherPage"),
  loading: () => <p>loading</p>
});

function App() {


  const [uiStore] = useState(() => new UiStore());
  const [userStore] = useState(() => new UserStore);

  return (
    <StoreProvider stores={[uiStore, userStore]}>
      <Router>
        <Home path="/" />
        <AsyncAnotherPage path="/another" />
      </Router>
    </StoreProvider>
  );
}

export default App;
