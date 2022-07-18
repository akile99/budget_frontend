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

export const updateTransactionStatus = (transaction) => ({
  type: TransactionActionTypes.UPDATE_STATUS,
  payload: transaction,
});

export const setCurrentTransaction = (transaction) => ({
  type: TransactionActionTypes.SET_CURRENT_TRANSACTION,
  payload: transaction,
});

export const updateSelectedTransaction = (transaction) => ({
  type: TransactionActionTypes.UPDATE_TRANSACTION,
  payload: transaction,
});

export const toggleTransactionDropdownHidden = () => ({
  type: TransactionActionTypes.TOGGLE_TRANSACTION_HIDDEN,
});

export const toggleEditTransactionDropdownHidden = () => ({
  type: TransactionActionTypes.TOGGLE_EDIT_TRANSACTION_HIDDEN,
});