import { createSelector } from "reselect";

export const selectTransactions = (state) => state.transactions;

export const selectTransactionList = createSelector(
  [selectTransactions],
  (transactions) => transactions.transactionList
);

export const selectCurrentTransaction = createSelector(
  [selectTransactions],
  (transactions) => transactions.currentTransaction
);

export const selectTransactionHidden = createSelector(
  [selectTransactions],
  (transactions) => transactions.hideTransactionDropdown
);

export const selectEditTransactionHidden = createSelector(
  [selectTransactions],
  (Transactions) => Transactions.hideEditTransactionDropdown
);