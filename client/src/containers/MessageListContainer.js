import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import MessageList from "../components/MessageList";
import ChannelContext from "../context/ChannelContext";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import PersonIcon from "@material-ui/icons/Person";

const MessageSectionContainer = (props) => {
  const messages = props.message.messages;
  const { selectedChannel } = useContext(ChannelContext);

  useEffect(() => {
    const elem = document.getElementById("messageList");
    elem.scrollTop = elem.scrollHeight;
  }, [messages]);

  const getTime = (date) => {
    const sentTime = new Date(date);

    let hour = sentTime.getHours();
    const ampm = hour >= 12 ? "pm" : "am";
    const minute = sentTime.getMinutes();
    hour = hour > 12 ? hour - 12 : hour;

    return `${hour}:${minute} ${ampm}`;
  };

  const messageList = selectedChannel ? (
    messages.length ? (
      messages.map((msg, idx) => (
        <ListItem key={idx}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={msg.messageBody}
            secondary={getTime(msg.createdAt)}
          />
        </ListItem>
      ))
    ) : (
      <Chip
        label="There's no message in this channel. Please create one."
        color="primary"
        style={styles.empty}
      />
    )
  ) : (
    <Chip
      label="Please choose a channel"
      color="primary"
      style={styles.empty}
    />
  );

  return <MessageList messageList={messageList} />;
};

const styles = {
  empty: {
    display: "block",
    width: "400px",
    margin: "auto",
    marginTop: "150px",
    paddingTop: "7px",
    textAlign: "center",
  },
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps)(MessageSectionContainer);
