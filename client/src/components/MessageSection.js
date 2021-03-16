import React from "react";

const MessageSection = (props) => {
  const { messageList } = props;
  return (
    <div>
      <ul>{messageList}</ul>
    </div>
  );
};

export default MessageSection;
