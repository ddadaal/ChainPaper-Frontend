import React, { useRef, useState } from 'react';
import { Router } from "@reach/router";
import Home from './pages/Home';
import Loadable from "react-loadable";
import { Spin } from 'antd';
import { StoreProvider } from 'simstate';
import { UiStore } from './stores/UiStore';
import { UserStore } from './stores/UserStore';
import RootLayout from './layouts/RootLayout';
import Loading from './components/Loading';

const AsyncAnotherPage = Loadable({
  loader: () => import("./pages/AnotherPage"),
  loading: Loading,
});

function App() {


  const [uiStore] = useState(() => new UiStore());
  const [userStore] = useState(() => new UserStore);

  return (
    <StoreProvider stores={[uiStore, userStore]}>

      <RootLayout>
        <Router>
          <Home path="/" />
          <AsyncAnotherPage path="/another" />
        </Router>

      </RootLayout>
    </StoreProvider>
  );
}

export default App;
