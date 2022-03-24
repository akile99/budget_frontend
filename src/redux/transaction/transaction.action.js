import TransactionActionTypes from "./transaction.types";

export const setTransactions = (transactions) => ({
  type: TransactionActionTypes.SET_TRANSACTIONS,
  payload: transactions,
});

export const addTransaction = (transaction) => ({
  type: TransactionActionTypes.ADD_TRANSACTION,
  payload: transaction,
});

export const addExpense = (transaction) => ({
  type: TransactionActionTypes.ADD_EXPENSE,
  payload: transaction,
});

export const addIncome = (transaction) => ({
  type: TransactionActionTypes.ADD_EXPENSE,
  payload: transaction,
});