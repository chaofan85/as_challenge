import { combineReducers } from "redux";

import channel from "./channel";
import message from "./message";

const rootReducer = combineReducers({
  channel,
  message,
});

export default rootReducer;
