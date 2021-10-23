import React from "react";

import "./transaction.styles.scss";

// const getStingDate = require('./Functions/getStingDate');

const Transaction = ({ transaction }) => {
  const { date, vendor, amount, status, category } = transaction;
  return (
    <div className="outline">
      <div className="flex justify-left">
        <p className="date transaction">{date}</p>
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
