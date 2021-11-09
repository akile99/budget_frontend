import AccountActionTypes from "./account.types";
import { updateAccountTotal } from "./account.utils";

const INITIAL_STATE = {
  accountList: [],
  currentAccount: null,
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountActionTypes.SET_ACCOUNTS:
      return {
        ...state,
        accountList: action.payload,
      };
    case AccountActionTypes.SET_CURRENT_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload,
      };
    case AccountActionTypes.UPDATE_ACCOUNT_TOTAL:
      return {
        ...state,
        accountList: updateAccountTotal(
          state.accountList,
          state.currentAccount,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default accountReducer;
