import React from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: 0 auto;
`;

const Loader = () => {
  return <RingLoader color={"#698eff"} css={override} size={100} />;
};

export default Loader;
