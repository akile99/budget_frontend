import React from "react";

import {
  TransactionContainer,
  DateContainer,
  VendorContainer,
  StatusContainer,
  Dollar,
  AmountContainer,
  CategoryContainer,
} from "./transaction.styles";

const Transaction = ({ transaction }) => {
  const { transaction_id, date, vendor, amount, status, label } = transaction;

  function formatDate(date) {
    const d = new Date(date);
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth() + 1;
    const day = d.getUTCDate();
    return month + "-" + day + "-" + year;
  }
  return (
    <TransactionContainer key={transaction_id}>
      <DateContainer>{formatDate(date)}</DateContainer>
      <VendorContainer>{vendor}</VendorContainer>
      <Dollar>$</Dollar>
      <AmountContainer>{amount}</AmountContainer>
      <StatusContainer>{ status ? "Cleared" : "Pending" } </StatusContainer>
      <CategoryContainer>{label}</CategoryContainer>
    </TransactionContainer>
  );
};

export default Transaction;
