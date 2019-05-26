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

const AsyncPaperUploadPage = Loadable({
  loader: () => import("./pages/PaperUploadPage"),
  loading: Loading,
});

const AsyncExplorePage = Loadable({
  loader: () => import("./pages/ExplorePage"),
  loading: Loading,
});

const AsyncProfilePage = Loadable({
  loader: () => import("./pages/ProfilePage"),
  loading: Loading,
})

function App() {


  const [uiStore] = useState(() => new UiStore());
  const [userStore] = useState(() => new UserStore);

  return (
    <StoreProvider stores={[uiStore, userStore]}>

      <RootLayout>
        <Router primary={false}>
          <HomePage path="/" />
          <AsyncExplorePage path="/explore" />
          <AsyncPaperUploadPage path="/upload" />
          <AsyncProfilePage path="/profile" />
        </Router>

      </RootLayout>
    </StoreProvider>
  );
}

export default App;
