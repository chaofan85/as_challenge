import React from "react";
import ChannelList from "../components/ChannelList";

const ChannelListContainer = (props) => {
  const { channels } = props;

  const channelsList = channels.map((channel, idx) => (
    <div key={idx}>{channel}</div>
  ));

  return <ChannelList channelsList={channelsList} />;
};

export default ChannelListContainer;
