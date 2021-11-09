import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { v4 as uuidv4 } from "uuid";

import { selectCurrentAccount } from "../../redux/account/account.selector";
import { updateAccountTotal } from "../../redux/account/account.action";
import { addTransaction } from "../../redux/transaction/transaction.action";
import Search from "../search/Search";

import "./insert-transaction.styles.scss";

const InsertTransaction = () => {
  const currentAccount = useSelector(selectCurrentAccount);
  const dispatch = useDispatch();
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [vendor, setVendor] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Pending");
  const [category_id, setCategory] = useState();

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const onVendorChange = (event) => {
    setVendor(event.target.value);
  };

  const onAmountChange = (event) => {
    const str = event.target.value;
    const res = str.replace(/,/g, "");
    setAmount(res);
  };

  const onStatusChange = (event) => {
    status === "Pending" ? setStatus("Cleared") : setStatus("Pending");
  };

  const onCategoryChange = (event) => {
    setCategory(event);
  };

  const onCommitIncome = () => {
    onCommitTransaction(amount);
  };

  const onCommitExpense = () => {
    onCommitTransaction(-amount);
  };

  const onCommitTransaction = (amount) => {
    if (!vendor || !amount || !category_id) {
      alert(`Required Field is missing`);
    } else {
      dispatch(updateAccountTotal(amount));
      dispatch(
        addTransaction({
          transaction_id: uuidv4(),
          date: date,
          vendor: vendor,
          category_id: category_id,
          status: status,
          amount: amount,
          account_id: currentAccount,
        })
      );
      setVendor("");
      setAmount("");
      setStatus("Pending");
    }
  };

  return (
    <div className="center">
      <div className="form center pa4 br3 shadow-5">
        <input
          className="f4 pa2 w-25 center"
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={onDateChange}
        />
        <input
          className="f4 pa2 w-25 center"
          type="text"
          placeholder="Vendor"
          id="Vendor"
          name="Vendor"
          value={vendor}
          onChange={onVendorChange}
          required
        />
        <input
          className="f4 pa2 w-25 center"
          type="double"
          placeholder="Amount"
          id="Amount"
          name="Amount"
          value={amount}
          onChange={onAmountChange}
        />
        <button
          className="w-30 link ph3 pv2 dib btn-white"
          id="CommitTransactionBTN"
          onClick={onStatusChange}
        >
          {status}
        </button>
        <Search className="f4 pa2 w-30 center" onChange={onCategoryChange} />
        <button
          className="w-10 grow f4 link ph3 pv2 dib white bg-light-blue"
          id="CommitTransactionBTN"
          onClick={onCommitExpense}
        >
          Expense
        </button>
        <button
          className="w-10 grow f4 link ph3 pv2 dib white bg-light-blue"
          id="CommitTransactionBTN"
          onClick={onCommitIncome}
        >
          Income
        </button>
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addTransaction: (transaction) => dispatch(addTransaction(transaction)),
//   updateBalance: (amount) => dispatch(updateBalance(amount)),
// });

const mapStateToProps = createStructuredSelector({
  currentAccount: selectCurrentAccount,
});

export default connect(mapStateToProps)(InsertTransaction);
