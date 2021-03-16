import { GET_MESSAGES } from "../actions/types";

const initialState = {
  messages: [],
};

function messageReducer(state = initialState, action) {
  const { type, payload } = action;

  let newState = Object.assign({}, state);

  switch (type) {
    case GET_MESSAGES:
      newState.messages = payload;
      return newState;

    default:
      return state;
  }
}

export default messageReducer;
