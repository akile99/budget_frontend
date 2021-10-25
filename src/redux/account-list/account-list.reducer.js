import AccountListActionTypes from "./account-list.types";

const INITIAL_STATE = {
  accountList: [],
};

const accountListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountListActionTypes.SET_ACCOUNTS:
      return {
        ...state,
        accountList: action.payload,
      };
    default:
      return state;
  }
};

export default accountListReducer;
