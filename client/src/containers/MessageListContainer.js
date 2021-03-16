import React from "react";
import { connect } from "react-redux";
import MessageList from "../components/MessageList";

const MessageSectionContainer = (props) => {
  const messages = props.message.messages;
  console.log(messages);
  const messageList = messages.map((msg, idx) => <li key={idx}>{msg}</li>);

  return <MessageList messageList={messageList} />;
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps)(MessageSectionContainer);
