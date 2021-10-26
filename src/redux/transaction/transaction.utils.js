export const addTransactionToList = (transactions, transactionToAdd) => {
  console.log(transactionToAdd);
  return [...transactions, transactionToAdd];
};

// amount: "1336.31";
// category: "PayCheck";
// date: "2021-10-21T00:00:00.000Z";
// status: "Cleared";
// transaction_id: "ff886318-ed6f-4468-aacd-c8cb4fc581ca";
// vendor: "afda";
