import React from "react";
import MessageListContainer from "../containers/MessageListContainer";
import InputBoxContainer from "../containers/InputBoxContainer";

const MessageSection = () => {
  return (
    <div style={styles.messageSection}>
      <MessageListContainer />
      <InputBoxContainer />
    </div>
  );
};

const styles = {
  messageSection: {
    border: "1px solid black",
  },
};

export default MessageSection;
