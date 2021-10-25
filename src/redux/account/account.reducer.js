import AccountActionTypes from "./account.types";

const INITIAL_STATE = {
  currentAccount: [],
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountActionTypes.SET_CURRENT_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
