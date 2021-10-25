import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { globalVars } from "../../hooks/global";
import { setTransactions } from "../../redux/transaction/transaction.action";
import { selectTransactionList } from "../../redux/transaction/transaction.selector";
import {
  selectAccountList,
  selectCurrentAccount,
} from "../../redux/account-list/account-list.selector";

import Transaction from "../transaction/transaction.component";

import "./transaction-list.styles.scss";

const TransactionList = ({
  transactionList,
  setTransactions,
  currentAccount,
}) => {
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() - 60);
    const from_date = d.toISOString().split("T")[0];
    const to_date = new Date().toISOString().split("T")[0];

    try {
      fetch(`${globalVars.HOST}transactions`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account_id: currentAccount.account_id,
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
  }, [currentAccount, setTransactions]);
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
      {transactionList.map((transaction) => (
        <Transaction
          key={transaction.transaction_id}
          transaction={transaction}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setTransactions: (transactions) => dispatch(setTransactions(transactions)),
});

const mapStateToProps = createStructuredSelector({
  transactionList: selectTransactionList,
  accounts: selectAccountList,
  currentAccount: selectCurrentAccount,
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
