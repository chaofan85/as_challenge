import React from "react";
import { connect } from "react-redux";
import MessageSection from "../components/MessageSection";

const MessageSectionContainer = (props) => {
  const messages = props.message.messages;

  const messageList = messages.map((msg, idx) => <li key={idx}>{msg}</li>);

  return <MessageSection messageList={messageList} />;
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps)(MessageSectionContainer);
