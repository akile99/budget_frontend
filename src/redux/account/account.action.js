import AccountActionTypes from "./account.types";

export const setAccounts = (accounts) => ({
  type: AccountActionTypes.SET_ACCOUNTS,
  payload: accounts,
});
