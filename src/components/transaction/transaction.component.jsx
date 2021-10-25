import React from "react";

import "./transaction.styles.scss";

const Transaction = ({ transaction }) => {
  const { date, vendor, amount, status, category } = transaction;

  function formatDate(date) {
    const d = new Date(date);

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate() + 1;

    return month + "-" + day + "-" + year;
  }
  return (
    <div className="outline">
      <div className="flex justify-left">
        <p className="date transaction">{formatDate(date)}</p>
        <p className="vendor1 transaction">{vendor}</p>
        <p className="dollar transaction">$</p>
        <p className="amount transaction">{amount}</p>
        <p className="status">{status} </p>
        <p className="category transaction">{category}</p>
      </div>
    </div>
  );
};

export default Transaction;
