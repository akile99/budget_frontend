import { globalVars } from "../../hooks/global";

export const addTransactionToList = (transactions, transactionToAdd) => {
  fetch(globalVars.HOST + "insert", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      date: transactionToAdd.date,
      vendor: transactionToAdd.vendor,
      category_id: transactionToAdd.category.value,
      status: transactionToAdd.status,
      amount: transactionToAdd.amount,
      account_id: transactionToAdd.account_id,
    }),
  })
    .then((response) => response.json())
    .catch(console.log);
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
