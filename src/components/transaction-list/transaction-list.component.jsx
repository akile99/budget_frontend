import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { globalVars } from "../../hooks/global";
import { setTransactions } from "../../redux/transaction/transaction.action";
import { selectTransactionList } from "../../redux/transaction/transaction.selector";
import { selectCurrentAccount } from "../../redux/account/account.selector";

import Transaction from "../transaction/transaction.component";

import "./transaction-list.styles.scss";

const TransactionList = ({
  transactionList,
  setTransactions,
  currentAccount,
}) => {
  // const account_id = "daee290c-f60b-44c8-a3bb-4005e7854b98";

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() - 60);
    const from_date = d.toISOString().split("T")[0];
    const to_date = new Date().toISOString().split("T")[0];
    if (currentAccount.account_id) {
      console.log(currentAccount.account_id);
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
  currentAccount: selectCurrentAccount,
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
