import { globalVars } from "../../hooks/global";

export const addTransactionToList = (transactions, transactionToAdd) => {
  // fetch(globalVars.HOST + "insert", {
  //   method: "post",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     date: transactionToAdd.date,
  //     vendor: transactionToAdd.vendor,
  //     category: transactionToAdd.category,
  //     status: transactionToAdd.status,
  //     amount: transactionToAdd.amount,
  //     account_id: transactionToAdd.account_id,
  //   }),
  // })
  //   .then((response) => response.json())
  //   .catch(console.log);
  return [transactionToAdd, ...transactions];
};
