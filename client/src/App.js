import React, { lazy, Suspense, Fragment } from "react";
import "./App.css";
import Loader from "./utils/Loader";

const MainPageContainer = lazy(() => import("./containers/MainPageContainer"));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <MainPageContainer />
      </Suspense>
    </Fragment>
  );
};

export default App;
