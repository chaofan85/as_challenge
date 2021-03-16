import React from "react";
import MessageListContainer from "../containers/MessageListContainer";
import InputBoxContainer from "../containers/InputBoxContainer";

const MessageSection = () => {
  return (
    <div style={styles.messageSection}>
      <div style={styles.headingContainer}>
        <h3 style={styles.heading}>Messages</h3>
      </div>
      <MessageListContainer />
      <InputBoxContainer />
    </div>
  );
};

const styles = {
  headingContainer: {
    height: "60px",
    paddingTop: "15px",
    backgroundColor: "#007CC7",
  },
  heading: {
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  messageSection: {
    backgroundColor: "#EEFBFB",
  },
};

export default MessageSection;
