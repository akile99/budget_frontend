import TransactionActionTypes from "./transaction.types";

export const setTransactions = (transactions) => ({
  type: TransactionActionTypes.SET_TRANSACTIONS,
  payload: transactions,
});
