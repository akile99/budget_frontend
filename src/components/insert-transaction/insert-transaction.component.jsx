import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { globalVars } from "../../hooks/global";

import { selectCurrentAccount } from "../../redux/account/account.selector";
import { updateAccountTotal, updateAccountPending } from "../../redux/account/account.action";
import {
  addIncome,
} from "../../redux/transaction/transaction.action";
import { setCategories } from "../../redux/category/category.action";
import { selectCategories } from "../../redux/category/category.selector";

import {
  InsertTransactionContainer,
  InsertFormContainer,
  InputContainer,
  VendorInput,
  Selector,
  CustomButton,
} from "./insert-transaction.styles";

const InsertTransaction = () => {
  const currentAccount = useSelector(selectCurrentAccount);
  const { categoryList } = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [expenseButton, setExpenseButton] = useState(false); 
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

  const onCommitExpense = () => {
    if (!vendor || !amount || !category) {
      alert(`Required Field is missing`);
    } else {
      setTransaction({ ...transaction, amount: -amount });
      setExpenseButton(true)
    }
  };

  const onCommitTransaction = () => {
    if (!vendor || !amount || !category) {
      alert(`Required Field is missing`);
    } else {
      if (status) {
        dispatch(updateAccountTotal(amount));
      }
      dispatch(addIncome(transaction));
      setTransaction({ ...transaction, vendor: "", amount: 0 });
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
    if (expenseButton) {
      if (status) {
        dispatch(updateAccountTotal(amount));
      } else {
        console.log(`pending ${amount}`)
        dispatch(updateAccountPending(amount));
      }
      dispatch(addIncome(transaction));
      setExpenseButton(false);
      setTransaction({ ...transaction, vendor: "", amount: 0 });
    }
  }, [dispatch, transaction, expenseButton, amount, status]);

  return (
    <InsertTransactionContainer>
      <InsertFormContainer onSubmit={(e) => e.preventDefault()}>
        <InputContainer
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
        <VendorInput
          type="text"
          placeholder="Vendor"
          id="vendor"
          name="vendor"
          value={vendor}
          onChange={handleChange}
          required
        />
        <InputContainer
          type="double"
          placeholder="Amount"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
        <CustomButton id="status" onClick={onStatusChange}>
          {status ? "Cleared" : "Pending"}
        </CustomButton>
        <Selector
          defaultValue={categoryList[0]}
          onChange={onCategoryChange}
          options={categoryList}
        />
        <CustomButton
          id="CommitTransactionBTN"
          onClick={() => {
            setTransaction({ ...transaction, amount: -amount });
            onCommitExpense();
          }}
        >
          Expense
        </CustomButton>
        <CustomButton id="CommitTransactionBTN" onClick={onCommitTransaction}>
          Income
        </CustomButton>
      </InsertFormContainer>
    </InsertTransactionContainer>
  );
};

export default InsertTransaction;
