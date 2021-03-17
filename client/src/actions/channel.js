import axios from "axios";

import { GET_CHANNELS } from "./types";

export const fetchChannels = () => async (dispatch) => {
  const res = await axios.get("channels");

  dispatch({
    type: GET_CHANNELS,
    payload: res.data,
  });
};
