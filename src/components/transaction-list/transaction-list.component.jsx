import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { globalVars } from "../../hooks/global";
import { setTransactions } from "../../redux/transaction/transaction.action";
import { selectTransactionList } from "../../redux/transaction/transaction.selector";
import { selectCurrentAccount } from "../../redux/account/account.selector";

import Transaction from "../transaction/transaction.component";

import {
  TransactionTable,
  TransactionListContainer,
  DateContainer,
  VendorContainer,
  StatusContainer,
  Dollar,
  AmountContainer,
  CategoryContainer,
} from "./transaction-list.styles";

const TransactionList = () => {
  const transactionList = useSelector(selectTransactionList);
  const currentAccount = useSelector(selectCurrentAccount);
  const dispatch = useDispatch();

  useEffect(() => {
    const d = new Date();
    const t = new Date();
    d.setDate(d.getDate() - 90);
    t.setDate(t.getDate() + 60);
    const from_date = d.toISOString().split("T")[0];
    const to_date = t.toISOString().split("T")[0];
    if (!currentAccount) {
      return;
    }
    try {
      fetch(`${globalVars.HOST}transactions`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account_id: currentAccount,
          from_date: from_date,
          to_date: to_date,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(setTransactions(data));
        });
    } catch (e) {
      console.log(e);
    }
  }, [currentAccount, dispatch]);
  return (
    <TransactionTable>
      <TransactionListContainer >
        <DateContainer>Date</DateContainer>
        <VendorContainer>Vender</VendorContainer>
        <Dollar>&nbsp;&nbsp;</Dollar>
        <AmountContainer>Amount</AmountContainer>
        <StatusContainer>Status</StatusContainer>
        <CategoryContainer>Category</CategoryContainer>
        {/* <p className="edit transaction">Edit</p> */}
      </TransactionListContainer>
      {transactionList.map((transaction) => (
        <Transaction
          key={transaction.transaction_id}
          transaction={transaction}
        />
      ))}
    </TransactionTable>
  );
};

export default TransactionList;
