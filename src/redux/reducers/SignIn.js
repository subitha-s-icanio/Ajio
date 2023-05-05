import { SIGN_IN } from "../actionTypes";

const initialState = {};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN.loader:
      return {
        ...state,
        loading: action.loading ?? true,
      };
    case SIGN_IN.clearReducerState:
      return initialState;
    default:
      return state;
  }
};

export default signIn;
