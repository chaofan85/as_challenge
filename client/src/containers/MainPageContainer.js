import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MainPage from "../components/MainPage";
import ChannelContext from "../context/ChannelContext";
import { fetchMessages } from "../actions/message";

const MainPageContainer = (props) => {
  const { fetchMessages } = props;

  const [selectedChannel, setSelectedChannel] = useState("");

  useEffect(() => {
    if (selectedChannel) {
      fetchMessages(selectedChannel);
    }
  }, [selectedChannel, fetchMessages]);

  return (
    <ChannelContext.Provider value={{ selectedChannel, setSelectedChannel }}>
      <MainPage />
    </ChannelContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  channel: state.channel,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (data) => dispatch(fetchMessages(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
