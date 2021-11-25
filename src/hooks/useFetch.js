export const HOST = "https://star-ship-enterprise.herokuapp.com/";

export const insertTransaction = (transaction) => {
  fetch(HOST + "insert", {
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

export const fetchUpdateBill = (bill) => {
  console.log(bill);
  //   fetch(HOST + "update_bill", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       bill_id: bill.bill_id,
  //       bill_name: bill.bill_name,
  //       amount: bill.amount,
  //       bill_website: bill.bill_website,
  //       due_date: bill.next_due_date,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .catch(console.log);
};
