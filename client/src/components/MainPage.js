import React from "react";
import ChannelListContainer from "../containers/ChannelListContainer";
import MessageSectionContainer from "../containers/MessageSectionContainer";

const MainPage = (props) => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <ChannelListContainer channels={props.channels} />
      </div>
      <div className="col-sm-8">
        <MessageSectionContainer />
      </div>
    </div>
  );
};

export default MainPage;
