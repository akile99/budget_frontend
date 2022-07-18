import { insertTransaction, updateTransactionStatusAPI, fetchUpdateTransaction } from "../../hooks/global";

export const addTransactionToList = (transactions, transactionToAdd) => {
  const transaction = {
    date: transactionToAdd.date,
    vendor: transactionToAdd.vendor,
    category_id: transactionToAdd.category.value,
    status: transactionToAdd.status,
    amount: transactionToAdd.amount,
    account_id: transactionToAdd.account_id,
  };
  insertTransaction(transaction);

  transactionToAdd = {
    date: transactionToAdd.date,
    vendor: transactionToAdd.vendor,
    label: transactionToAdd.category.label,
    status: transactionToAdd.status,
    amount: transactionToAdd.amount,
    account_id: transactionToAdd.account_id,
  };
  return [transactionToAdd, ...transactions];
};

export const updateStatus = (transactions, transaction) => {
  updateTransactionStatusAPI(transaction);
  return [...transactions];
};

export const updateTransaction = (transactionToUpdate) => {
  fetchUpdateTransaction(transactionToUpdate);
};
