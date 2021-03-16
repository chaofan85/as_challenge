import React from "react";

const MessageList = (props) => {
  const { messageList } = props;
  return (
    <div style={styles.messageList}>
      <ul>{messageList}</ul>
    </div>
  );
};

const styles = {
  messageList: {
    height: `${window.innerHeight * 0.9}px`,
  },
};

export default MessageList;
