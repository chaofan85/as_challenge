import React from "react";

const MessageList = (props) => {
  const { messageList } = props;
  return (
    <div>
      <ul>{messageList}</ul>
    </div>
  );
};

export default MessageList;
