import { createSelector } from "reselect";

export const selectTransactions = (state) => state.transactions;

export const selectTransactionList = createSelector(
  [selectTransactions],
  (transactions) => transactions.transactionList
);
