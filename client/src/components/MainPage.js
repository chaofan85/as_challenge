import React from "react";
import ChannelListContainer from "../containers/ChannelListContainer";
import MessageSection from "../components/MessageSection";

const MainPage = (props) => {
  return (
    <div className="row">
      <div className="col-sm-3" style={styles.div1}>
        <ChannelListContainer channels={props.channels} />
      </div>
      <div className="col-sm-9" style={styles.div2}>
        <MessageSection />
      </div>
    </div>
  );
};

const styles = {
  div1: {
    paddingLeft: "0",
    paddingRight: "0",
    textAlign: "center",
    border: "1px solid black",
  },
  div2: {
    paddingLeft: "0",
    paddingRight: "25px",
  },
};

export default MainPage;
