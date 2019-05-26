import React, {useRef, useState} from 'react';
import {Router} from "@reach/router";
import Home from './pages/Home';
import Loadable from "react-loadable";
<<<<<<< HEAD
import { Spin } from 'antd';
import { StoreProvider } from 'simstate';
import { UiStore } from './stores/UiStore';
import { UserStore } from './stores/UserStore';
import RootLayout from './layouts/RootLayout';
import Loading from './components/Loading';
=======
import {Spin} from 'antd';
import {StoreProvider} from 'simstate';
import {UiStore} from './stores/UiStore';
import {UserStore} from './stores/UserStore';
import PaperUploadPage from "./pages/PaperUploadPage";
>>>>>>> c8a8057655a8e219eed66e31ef5e3205800bf40b

const AsyncAnotherPage = Loadable({
  loader: () => import("./pages/AnotherPage"),
  loading: Loading,
});

function App() {


  const [uiStore] = useState(() => new UiStore());
  const [userStore] = useState(() => new UserStore);

  return (
    <StoreProvider stores={[uiStore, userStore]}>
<<<<<<< HEAD

      <RootLayout>
        <Router>
          <Home path="/" />
          <AsyncAnotherPage path="/another" />
        </Router>

      </RootLayout>
=======
      <Router>
        {/*<Home path="/"/>*/}
        <AsyncAnotherPage path="/another"/>
        <PaperUploadPage path="/"/>
      </Router>
>>>>>>> c8a8057655a8e219eed66e31ef5e3205800bf40b
    </StoreProvider>
  );
}

export default App;
