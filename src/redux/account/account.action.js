import AccountActionTypes from "./account.types";

export const setAccount = (account) => ({
  type: AccountActionTypes.SET_CURRENT_ACCOUNT,
  payload: account,
});
