import TransactionActionTypes from "./transaction.types";

export const setTransactions = (transactions) => ({
  type: TransactionActionTypes.SET_TRANSACTIONS,
  payload: transactions,
});

export const addTransaction = (transaction) => ({
  type: TransactionActionTypes.ADD_TRANSACTION,
  payload: transaction,
});
