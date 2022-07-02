import { insertTransaction, fetchUpdateBill } from "../../hooks/global";

export const addBillToUpcommingBills = (bills, billToAdd) => {
  return [...bills, billToAdd];
};

export const payBill = (billToPay) => {
  const transaction = {
    date: billToPay.date,
    vendor: billToPay.vendor,
    category_id: billToPay.category_id,
    status: false,
    amount: billToPay.amount,
    account_id: billToPay.account_id,
  };
  insertTransaction(transaction);
  updateBill(billToPay);
};

export const updateBill = (billToUpdate) => {
  fetchUpdateBill(billToUpdate);
};
