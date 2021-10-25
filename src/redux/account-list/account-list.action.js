import AccountListActionTypes from "./account-list.types";

export const setAccounts = (accounts) => ({
  type: AccountListActionTypes.SET_ACCOUNTS,
  payload: accounts,
});

export const setCurrentAccount = (account) => ({
  type: AccountListActionTypes.SET_CURRENT_ACCOUNT,
  payload: account,
});
