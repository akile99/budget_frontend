import AccountActionTypes from "./account.types";

const INITIAL_STATE = {
  currentAccount: null,
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountActionTypes.SET_CURRENT_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload,
      };
    case AccountActionTypes.CLEAR_CURRENT_ACCOUNT:
      return {
        INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default accountReducer;
