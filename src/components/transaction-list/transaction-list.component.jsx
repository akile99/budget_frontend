import React, { useState, useEffect } from "react";

import { globalVars } from "../../hooks/global.js";
import Transaction from "../transaction/transaction.component";

import "./transaction-list.styles.scss";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const account_id = "daee290c-f60b-44c8-a3bb-4005e7854b98";
  const d = new Date();
  d.setDate(d.getDate() - 60);
  const from_date = d.toISOString().split("T")[0];
  const to_date = new Date().toISOString().split("T")[0];

  // const updateTransactions = (value) => {
  //   props.onChange();
  // };
  useEffect(() => {
    try {
      fetch(`${globalVars.HOST}transactions`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account_id: account_id,
          from_date: from_date,
          to_date: to_date,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTransactions(data);
        });
    } catch (e) {
      console.log(e);
    }
  }, [from_date, to_date]);

  return (
    <div>
      <div className="outline flex justify-center">
        <p className="date transaction">Date</p>
        <p className="vendor1 transaction">Vender</p>
        <p className="dollar transaction">&nbsp;&nbsp;</p>
        <p className="amount transaction">Amount</p>
        <p className="status transaction">Status</p>
        <p className="category transaction">Category</p>
        <p className="edit transaction">Edit</p>
      </div>
      {transactions.map((transaction) => {
        return (
          <Transaction
            className="transactions"
            key={transaction.transaction_id}
            transaction_id={transaction.transaction_id}
            accountid={transaction.accountid}
            date={transaction.date}
            vendor={transaction.vendor}
            amount={(Math.round(transaction.amount * 100) / 100).toFixed(2)}
            status={transaction.status}
            category={transaction.category}
          />
        );
      })}
    </div>
  );
};

export default TransactionList;
