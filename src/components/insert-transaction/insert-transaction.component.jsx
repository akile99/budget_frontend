import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { globalVars } from "../../hooks/global";
import Select from "react-select";

import { selectCurrentAccount } from "../../redux/account/account.selector";
import { updateAccountTotal } from "../../redux/account/account.action";
import { addTransaction } from "../../redux/transaction/transaction.action";
import { setCategories } from "../../redux/category/category.action";
import { selectCategories } from "../../redux/category/category.selector";

import "./insert-transaction.styles.scss";

const InsertTransaction = () => {
  const currentAccount = useSelector(selectCurrentAccount);
  const { categoryList } = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState({
    date: new Date().toISOString().slice(0, 10),
    transaction_id: uuidv4(),
    vendor: "",
    amount: "",
    status: true,
    category: {},
    account_id: currentAccount,
  });
  const { date, vendor, amount, status, category } = transaction;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setTransaction({ ...transaction, [name]: value });
  };

  const onStatusChange = () => {
    setTransaction({ ...transaction, status: !status });
  };

  const onCategoryChange = (event) => {
    setTransaction({ ...transaction, category: event });
  };

  const onCommitIncome = () => {
    onCommitTransaction(amount);
  };

  const onCommitExpense = () => {
    onCommitTransaction(-amount);
  };

  const onCommitTransaction = (amount) => {
    if (!vendor || !amount || !category) {
      alert(`Required Field is missing`);
    } else {
      dispatch(updateAccountTotal(amount));
      dispatch(addTransaction(transaction));
      setTransaction({ ...transaction, vendor: "", amount: "" });
    }
  };

  useEffect(() => {
    try {
      fetch(globalVars.HOST + "category")
        .then((response) => response.json())
        .then((data) => {
          dispatch(setCategories(data));
        });
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  return (
    <div className="center">
      <div className="form center pa4 br3 shadow-5">
        <input
          className="f4 pa2 w-25 center"
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
        <input
          className="f4 pa2 w-25 center"
          type="text"
          placeholder="Vendor"
          id="vendor"
          name="vendor"
          value={vendor}
          onChange={handleChange}
          required
        />
        <input
          className="f4 pa2 w-25 center"
          type="double"
          placeholder="Amount"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
        <button
          className="w-30 link ph3 pv2 dib btn-white"
          id="status"
          onClick={onStatusChange}
        >
          {status ? "Cleared" : "Pending"}
        </button>
        <Select
          className="f4 pa2 w-30 center"
          defaultValue={categoryList[0]}
          onChange={onCategoryChange}
          options={categoryList}
        />
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

export default InsertTransaction;
