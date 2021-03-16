import React from "react";
import ChannelListContainer from "../containers/ChannelListContainer";
import MessageSection from "../components/MessageSection";

const MainPage = (props) => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <ChannelListContainer channels={props.channels} />
      </div>
      <div className="col-sm-8">
        <MessageSection />
      </div>
    </div>
  );
};

export default MainPage;
