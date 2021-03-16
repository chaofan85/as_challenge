import React from "react";

const ChannelList = (props) => {
  const { channelsList } = props;
  return (
    <div>
      <div style={styles.heading}>
        <h3>Channels</h3>
      </div>

      <div style={styles.channels}>{channelsList}</div>
    </div>
  );
};

const styles = {
  heading: {
    height: "60px",
    paddingTop: "15px",
    borderBottom: "1px solid black",
  },
  channels: {
    height: `${window.innerHeight - 60}px`,
    paddingTop: "25px",
  },
};

export default ChannelList;
