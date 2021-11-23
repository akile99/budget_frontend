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

export const selectAccountTotal = createSelector([selectAccounts], (accounts) =>
  accounts.accountList.map((account) =>
    account.account_id === accounts.currentAccount ? account.total : null
  )
);
