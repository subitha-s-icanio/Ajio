import { combineReducers } from "redux";
import { ROOT_REDUCER } from "./actionTypes";
import SignIn from "./reducers/SignIn";

const appReducer = combineReducers({
    SignIn: SignIn,
});

const rootReducer = (state, action) => {
  if (action.type === ROOT_REDUCER.appReducerLogout) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
