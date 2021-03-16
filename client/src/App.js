import React, { lazy, Suspense, Fragment } from "react";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import Loader from "./utils/Loader";

import "./bootstrap.min.css";

const MainPageContainer = lazy(() => import("./containers/MainPageContainer"));

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Suspense fallback={<Loader />}>
          <MainPageContainer />
        </Suspense>
      </Fragment>
    </Provider>
  );
};

export default App;
