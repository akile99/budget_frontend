import AccountActionTypes from "./account.types";

const INITIAL_STATE = {
  account: [],
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountActionTypes.CURRENT_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
