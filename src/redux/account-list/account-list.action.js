import AccountListActionTypes from "./account-list.types";

export const setAccounts = (accounts) => ({
  type: AccountListActionTypes.SET_ACCOUNTS,
  payload: accounts,
});
