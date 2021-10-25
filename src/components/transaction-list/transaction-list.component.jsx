import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectTransactionList } from "../../redux/transaction/transaction.selector";

import Transaction from "../transaction/transaction.component";

import "./transaction-list.styles.scss";

const TransactionList = ({ transactionList }) => (
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
    {transactionList.map((transaction) => (
      <Transaction
        className="transactions"
        key={transaction.transaction_id}
        transaction={transaction}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  transactionList: selectTransactionList,
});

export default connect(mapStateToProps)(TransactionList);
