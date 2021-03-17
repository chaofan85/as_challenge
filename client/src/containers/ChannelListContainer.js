import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import ChannelList from "../components/ChannelList";
import ChannelContext from "../context/ChannelContext";
import { fetchChannels } from "../actions/channel";

import Chip from "@material-ui/core/Chip";

const ChannelListContainer = (props) => {
  const { fetchChannels } = props;
  const { selectedChannel, setSelectedChannel } = useContext(ChannelContext);

  const channels = props.channel.channels;

  useEffect(() => {
    fetchChannels();
  }, [fetchChannels]);

  const channelsList = channels.map((channel) => (
    <Chip
      key={channel.id}
      label={channel.name}
      onClick={() => {
        setSelectedChannel(channel.id);
      }}
      clickable
      color={`${selectedChannel === channel.id ? "secondary" : "primary"}`}
      style={styles.chip}
    />
  ));

  return <ChannelList channelsList={channelsList} />;
};

const styles = {
  chip: {
    display: "block",
    width: "150px",
    margin: "auto",
    marginBottom: "15px",
    paddingTop: "7px",
  },
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
