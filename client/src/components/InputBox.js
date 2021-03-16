import React, { useEffect, useContext } from "react";
import ChannelContext from "../context/ChannelContext";

const InputBox = (props) => {
  const { messageBody, setMessageBody, onSubmit } = props;
  const { selectedChannel } = useContext(ChannelContext);

  useEffect(() => {
    setMessageBody("");
  }, [selectedChannel, setMessageBody]);

  return (
    <div>
      <input
        value={messageBody}
        onChange={(e) => setMessageBody(e.currentTarget.value)}
      />
      <button
        type="button"
        onClick={onSubmit}
        disabled={!messageBody || !selectedChannel}
      >
        submit
      </button>
    </div>
  );
};

export default InputBox;
