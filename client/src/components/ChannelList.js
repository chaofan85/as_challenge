import React from "react";

const ChannelList = (props) => {
  const { channelsList } = props;
  return (
    <div>
      <div style={styles.headingContainer}>
        <h3 style={styles.heading}>Channels</h3>
      </div>

      <div style={styles.channels}>{channelsList}</div>
    </div>
  );
};

const styles = {
  headingContainer: {
    height: "60px",
    paddingTop: "15px",
    backgroundColor: "#12232E",
  },
  heading: {
    fontWeight: "600",
    color: "white",
  },
  channels: {
    height: "600px",
    paddingTop: "50px",
    backgroundColor: "#4DA8DA",
  },
};

export default ChannelList;
