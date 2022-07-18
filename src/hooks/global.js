export const globalVars = {
  HOST: "https://star-ship-enterprise.herokuapp.com/",
  USER_ID: "368c15a4-0c45-441f-959d-0d33a6542cb3",
};

export const insertTransaction = async (transaction) => {
  await fetch(globalVars.HOST + "insert", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      date: transaction.date,
      vendor: transaction.vendor,
      category_id: transaction.category_id,
      status: transaction.status,
      amount: transaction.amount,
      account_id: transaction.account_id,
    }),
  })
    .then((response) => response.json())
    .catch(console.log);
};

export const fetchUpdateTransaction = async (transaction) => {
  await fetch(globalVars.HOST + "update", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      date: transaction.date,
      vendor: transaction.vendor,
      category_id: transaction.category_id,
      status: transaction.status,
      amount: transaction.amount,
      transaction_id: transaction.transaction_id,
    }),
  })
    .then((response) => response.json())
    .catch(console.log);
};

export const updateTransactionStatusAPI = async (transaction) => {
  await fetch(globalVars.HOST + "updateStatus", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      transaction_id: transaction.transaction_id,
    }),
  })
    .then((response) => response.json())
    .catch(console.log);
};

export const formatDate = (date) => {
  const d = new Date(date);
  const month = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  const year = d.getUTCFullYear();
  return month + "-" + day + "-" + year;
};

export const fetchUpdateBill = async (bill) => {
  await fetch(globalVars.HOST + "update_bill", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bill_id: bill.bill_id,
      bill_name: bill.vendor,
      amount: bill.amount * -1,
      bill_website: bill.bill_website,
      due_day: bill.next_due_date,
    }),
  })
    .then((response) => response.json())
    .catch(console.log);
};
