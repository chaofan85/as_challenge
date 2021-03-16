import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ChannelList from "../components/ChannelList";

import { fetchChannels } from "../actions/channel";

const ChannelListContainer = (props) => {
  const { fetchChannels } = props;

  const channels = props.channel.channels;

  useEffect(() => {
    fetchChannels();
  }, [fetchChannels]);

  const channelsList = channels.map((channel) => (
    <div
      key={channel.id}
      onClick={() => {
        console.log(channel);
      }}
    >
      {channel.name}
    </div>
  ));

  return <ChannelList channelsList={channelsList} />;
};

const mapStateToProps = (state) => ({
  channel: state.channel,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListContainer);
