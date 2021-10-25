import AccountListActionTypes from "./account-list.types";

const INITIAL_STATE = {
  accountList: [],
  currentAccount: [],
};

const accountListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountListActionTypes.SET_ACCOUNTS:
      return {
        ...state,
        accountList: action.payload,
      };
    case AccountListActionTypes.SET_CURRENT_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload,
      };
    default:
      return state;
  }
};

export default accountListReducer;
