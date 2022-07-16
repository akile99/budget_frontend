import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateTransactionStatus } from "../../redux/transaction/transaction.action";
import { updateAccountTotal } from "../../redux/account/account.action";


import {
  TransactionContainer,
  DateContainer,
  VendorContainer,
  StatusContainer,
  Dollar,
  AmountContainer,
  CategoryContainer,
  EditContainer
} from "./transaction.styles";

const Transaction = ({ current_transaction }) => {
  const dispatch = useDispatch();
  const { transaction_id, date, vendor, amount, status, label } = current_transaction;
  const [transaction, setTransaction] = useState({
    date: new Date().toISOString().slice(0, 10),
    transaction_id: transaction_id,
    vendor: vendor,
    amount: amount,
    status: status,
  });

  function formatDate(date) {
    const d = new Date(date);
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth() + 1;
    const day = d.getUTCDate();
    return month + "-" + day + "-" + year;
  }

  const onStatusChange = () => {
    setTransaction({ ...transaction, status: !transaction.status })
    if (transaction.status) {
      dispatch(updateAccountTotal(-amount))
    } else {
      dispatch(updateAccountTotal(amount))
    }
    dispatch(updateTransactionStatus(transaction));
  }

  return (
    <TransactionContainer key={transaction_id}>
      <DateContainer>{formatDate(date)}</DateContainer>
      <VendorContainer>{vendor}</VendorContainer>
      <Dollar>$</Dollar>
      <AmountContainer>{amount}</AmountContainer>
      <StatusContainer
        onClick={() => {
          onStatusChange();
        }}
      >{ transaction.status ? "Cleared" : "Pending" } </StatusContainer>
      <CategoryContainer>{label}</CategoryContainer>
      <EditContainer>Edit</EditContainer>
    </TransactionContainer>
  );
};

export default Transaction;
