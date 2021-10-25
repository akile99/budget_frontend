import { createSelector } from "reselect";

const selectAccount = (state) => state.account;

export const selectCurrentAccount = createSelector(
  [selectAccount],
  (account) => account.currentAccount
);
