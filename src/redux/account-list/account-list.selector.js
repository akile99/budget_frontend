import { createSelector } from "reselect";

export const selectAccounts = (state) => state.accounts;

export const selectAccountList = createSelector(
  [selectAccounts],
  (accounts) => accounts.accountList
);

export const selectCurrentAccount = createSelector(
  [selectAccounts],
  (accounts) => accounts.currentAccount
);
