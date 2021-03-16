import React from "react";
import ChannelList from "../components/ChannelList";

const ChannelListContainer = (props) => {
  const { channels } = props;

  console.log(channels);

  const channelsList = channels.map((channel, idx) => (
    <div
      key={idx}
      onClick={() => {
        console.log(channel);
      }}
    >
      {channel}
    </div>
  ));

  return <ChannelList channelsList={channelsList} />;
};

export default ChannelListContainer;
