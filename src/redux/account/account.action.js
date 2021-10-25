import AccountActionTypes from "./account.types";

export const setAccounts = (accounts) => ({
  type: AccountActionTypes.SET_ACCOUNTS,
  payload: accounts,
});

export const setCurrentAccount = (account) => ({
  type: AccountActionTypes.SET_CURRENT_ACCOUNT,
  payload: account,
});

export const setAccountBalance = (balance) => ({
  type: AccountActionTypes.SET_ACCOUNT_BALANCE,
  payload: balance,
});
