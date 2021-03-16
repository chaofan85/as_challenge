import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import ChannelList from "../components/ChannelList";
import ChannelContext from "../context/ChannelContext";
import { fetchChannels } from "../actions/channel";

const ChannelListContainer = (props) => {
  const { fetchChannels } = props;
  const { selectedChannel, setSelectedChannel } = useContext(ChannelContext);

  const channels = props.channel.channels;

  useEffect(() => {
    fetchChannels();
  }, [fetchChannels]);

  const channelsList = channels.map((channel) => (
    <div
      key={channel.id}
      onClick={() => {
        setSelectedChannel(channel.id);
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
