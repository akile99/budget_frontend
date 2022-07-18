import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentTransaction } from "../../redux/transaction/transaction.selector";
import { updateSelectedTransaction, setCurrentTransaction, toggleEditTransactionDropdownHidden } from "../../redux/transaction/transaction.action";
import { selectCategories } from "../../redux/category/category.selector"

import { TransactionDropDownContainer, Selector } from "./edit-transaction-dropdown.styles";

const TransactionEditDropDown = () => {
  const currentTransaction = useSelector(selectCurrentTransaction);
  const { categoryList } = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState({
    transaction_id: currentTransaction.transaction_id ? currentTransaction.transaction_id : "",
    date: currentTransaction.date,
    vendor: currentTransaction.vendor,
    label: currentTransaction.label,
    category_id: currentTransaction.category_id,
    status: currentTransaction.status,
    amount: Number(currentTransaction.amount.replace(/[^0-9.-]+/g, "")),
  });
  const { vendor, amount, date } = transaction;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setTransaction({ ...transaction, [name]: value });
  };

  const onCategoryChange = (event) => {
    setTransaction({ ...transaction, category_id: event.value });
  };

  const handleEdit = () => {
    dispatch(updateSelectedTransaction(transaction));
    dispatch(toggleEditTransactionDropdownHidden());
  };

  const handleClose = () => {
    dispatch(toggleEditTransactionDropdownHidden());
    dispatch(setCurrentTransaction(null));
  };

  return (
    <TransactionDropDownContainer id={ currentTransaction.transaction_id }>
      <div>
        <p>Current Due Date</p>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Vendor</p>
        <input
          type="text"
          id="vendor"
          name="vendor"
          value={vendor}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Payment</p>
        <input
          type="text"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
      </div>
      <Selector
          placeholder = {transaction.label}
          onChange={onCategoryChange}
          options={categoryList}
        />
      <button onClick={handleEdit}>Update</button>
      <button onClick={handleClose}>Cancel</button>
    </TransactionDropDownContainer>
  );
};

export default TransactionEditDropDown;
