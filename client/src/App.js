import React, { lazy, Suspense, Fragment } from "react";
import "./App.css";
import Loader from "./utils/Loader";

const MainPage = lazy(() => import("./components/MainPage"));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <MainPage />
      </Suspense>
    </Fragment>
  );
};

export default App;
