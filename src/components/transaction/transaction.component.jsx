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
  const { transaction_id, date, vendor, amount, status, category } =
    transaction;

  function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return month + "-" + day + "-" + year;
  }
  return (
    <TransactionContainer>
      <DateContainer>{formatDate(date)}</DateContainer>
      <VendorContainer>{vendor}</VendorContainer>
      <Dollar>$</Dollar>
      <AmountContainer>{amount}</AmountContainer>
      <StatusContainer>{status} </StatusContainer>
      <CategoryContainer onClick={() => console.log("transaction_id")}>
        {category}
      </CategoryContainer>
    </TransactionContainer>
  );
};

export default Transaction;
