import { createSelector } from "reselect";

export const selectAccount = (state) => state.account;

export const selectCurrentAccount = createSelector(
  [selectAccount],
  (account) => account.currentAccount
);
