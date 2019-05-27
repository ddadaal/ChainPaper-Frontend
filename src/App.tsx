import React, {useRef, useState} from 'react';
import {Router} from "@reach/router";
import HomePage from './pages/HomePage';
import Loadable from "react-loadable";
import {Spin} from 'antd';
import {StoreProvider} from 'simstate';
import {UiStore} from './stores/UiStore';
import {UserStore} from './stores/UserStore';
import RootLayout from './layouts/RootLayout';
import Loading from './components/Loading';
import PageLoading from './components/PageLoading';

const AsyncExplorePage = Loadable({
  loader: () => import("./pages/ExplorePage"),
  loading: PageLoading,
});

const AsyncPaperDetailPage = Loadable({
  loader: () => import("./pages/PaperDetailPage/index"),
  loading: PageLoading,
});

const AsyncProfilePage = Loadable({
  loader: () => import("./pages/ProfilePage"),
  loading: PageLoading,
});

const AsyncPaperUploadPage = Loadable({
  loader: () => import("./pages/PaperUploadPage"),
  loading: PageLoading,
});

const AsyncPaperEditPage = Loadable({
  loader: () => import("./pages/PaperEditPage"),
  loading: PageLoading,
});

function App() {
  const [uiStore] = useState(() => new UiStore());
  const [userStore] = useState(() => new UserStore);

  return (
    <StoreProvider stores={[uiStore, userStore]}>

      <RootLayout>
        <Router primary={false}>
          <HomePage path="/"/>
          <AsyncExplorePage path="/explore"/>
          <AsyncPaperDetailPage path="/papers/:paperId"/>
          <AsyncPaperEditPage path="/papers/:paperId/edit"/>
          <AsyncPaperUploadPage path="/upload"/>
          <AsyncProfilePage path="/profile"/>
        </Router>

      </RootLayout>
    </StoreProvider>
  );
}

export default App;
