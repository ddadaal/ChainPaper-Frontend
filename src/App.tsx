import React, { useRef, useState } from 'react';
import { Router } from "@reach/router";
import HomePage from './pages/HomePage';
import Loadable from "react-loadable";
import { Spin } from 'antd';
import { StoreProvider } from 'simstate';
import { UiStore } from './stores/UiStore';
import { UserStore } from './stores/UserStore';
import RootLayout from './layouts/RootLayout';
import Loading from './components/Loading';
import PaperUploadPage from './pages/PaperUploadPage';
import ExplorePage from './pages/Explore';

const AsyncAnotherPage = Loadable({
  loader: () => import("./pages/AnotherPage"),
  loading: Loading,
});

const AsyncExplorePage = Loadable({
  loader: () => import("./pages/Explore"),
  loading: Loading,
});

function App() {


  const [uiStore] = useState(() => new UiStore());
  const [userStore] = useState(() => new UserStore);

  return (
    <StoreProvider stores={[uiStore, userStore]}>

      <RootLayout>
        <Router primary={false}>
          <HomePage path="/" />
          <AsyncExplorePage path="/explore" />
          <AsyncAnotherPage path="/another" />
          <PaperUploadPage path="/upload" />

        </Router>

      </RootLayout>
    </StoreProvider>
  );
}

export default App;
