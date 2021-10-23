import TransactionActionTypes from "./transaction.types";

export const setTransactions = (account) => ({
  type: TransactionActionTypes.SET_TRANSACTIONS,
  payload: account,
});
