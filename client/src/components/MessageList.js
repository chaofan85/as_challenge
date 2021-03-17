import React from "react";
import List from "@material-ui/core/List";

const MessageList = (props) => {
  const { messageList } = props;
  return (
    <div id="messageList" style={styles.messageList}>
      <List style={{ position: "relative" }}>{messageList}</List>
    </div>
  );
};

const styles = {
  messageList: {
    height: `560px`,
    overflowY: "scroll",
  },
};

export default MessageList;
