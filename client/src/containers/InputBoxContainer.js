import React, { useState, useEffect, useContext } from "react";
import InputBox from "../components/InputBox";
import { connect } from "react-redux";
import { createMessage } from "../actions/message";
import ChannelContext from "../context/ChannelContext";

const InputBoxContainer = (props) => {
  const { createMessage } = props;
  const { selectedChannel } = useContext(ChannelContext);
  const [messageBody, setMessageBody] = useState("");

  const enterToSubmit = (e) => {
    if (selectedChannel && e.which === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    const data = { channelId: selectedChannel, messageBody };
    createMessage(data);
    setMessageBody("");
  };

  return (
    <InputBox
      messageBody={messageBody}
      setMessageBody={setMessageBody}
      enterToSubmit={enterToSubmit}
      onSubmit={onSubmit}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (data) => dispatch(createMessage(data)),
  };
};

export default connect(null, mapDispatchToProps)(InputBoxContainer);
