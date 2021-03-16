import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "../components/MainPage";

const MainPageContainer = () => {
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("");

  const fetchChannels = async () => {
    const res = await axios.get("api/channels");
    console.log(res.data);
    setChannels(res.data);
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  return <MainPage channels={channels} messages={messages} />;
};

export default MainPageContainer;
