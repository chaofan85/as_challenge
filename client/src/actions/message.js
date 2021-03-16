import axios from "axios";

import { GET_MESSAGES } from "./types";

export const fetchMessages = (channelId) => async (dispatch) => {
  const res = await axios.get(`api/messages/${channelId}`);

  dispatch({
    type: GET_MESSAGES,
    payload: res.data,
  });
};

export const createMessage = (formData) => async (dispatch) => {
  const res = await axios.post(`api/messages`, formData);

  dispatch({
    type: GET_MESSAGES,
    payload: res.data,
  });
};
