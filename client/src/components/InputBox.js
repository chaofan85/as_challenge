import React, { useEffect, useContext } from "react";
import ChannelContext from "../context/ChannelContext";

const InputBox = (props) => {
  const { messageBody, setMessageBody, enterToSubmit, onSubmit } = props;
  const { selectedChannel } = useContext(ChannelContext);

  useEffect(() => {
    setMessageBody("");
  }, [selectedChannel, setMessageBody]);

  return (
    <div className="input-group" style={styles.inputBox}>
      <input
        value={messageBody}
        className="form-control"
        onKeyPress={enterToSubmit}
        onChange={(e) => setMessageBody(e.currentTarget.value)}
        style={styles.input}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={onSubmit}
        disabled={!messageBody || !selectedChannel}
        style={styles.button}
      >
        submit
      </button>
    </div>
  );
};

const styles = {
  inputBox: {
    textAlign: "left",
    height: `40px`,
  },
  input: {
    width: "80%",
    height: "100%",
    borderRadius: "10px 0 0 10px",
  },
  button: {
    width: "80px",
    height: `40px`,
    boxSizing: "border-box",
    borderRadius: "0 10px 10px 0",
  },
};

export default InputBox;
