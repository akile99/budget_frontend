import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.LOG_OUT_USER:
      return {
        INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default userReducer;
