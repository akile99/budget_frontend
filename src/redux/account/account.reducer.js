import AccountActionTypes from "./account.types";

const INITIAL_STATE = {
  accountList: [],
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountActionTypes.SET_ACCOUNTS:
      return {
        ...state,
        accountList: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
