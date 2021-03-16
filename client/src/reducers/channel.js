import { GET_CHANNELS } from "../actions/types";

const initialState = {
  channels: [],
};

function channelReducer(state = initialState, action) {
  const { type, payload } = action;

  let newState = Object.assign({}, state);

  switch (type) {
    case GET_CHANNELS:
      newState.channels = payload;
      return newState;

    default:
      break;
  }
}

export default channelReducer;
