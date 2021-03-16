import React from "react";
import MessageListContainer from "../containers/MessageListContainer";
import InputBoxContainer from "../containers/InputBoxContainer";

const MessageSection = () => {
  return (
    <div>
      <MessageListContainer />
      <InputBoxContainer />
    </div>
  );
};

export default MessageSection;
