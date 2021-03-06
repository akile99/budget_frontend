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
    transaction_id: currentTransaction ? currentTransaction.transaction_id : "",
    date: currentTransaction ? currentTransaction.date : "",
    vendor: currentTransaction ? currentTransaction.vendor : "",
    label: currentTransaction ? currentTransaction.label : "",
    category_id: currentTransaction ? currentTransaction.category_id : "",
    status: currentTransaction ? currentTransaction.status : "",
    amount: currentTransaction ? currentTransaction.amount : "",
  });
  const { transaction_id, vendor, amount, date, status } = transaction;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setTransaction({ ...transaction, [name]: value });
  };

  const onCategoryChange = (event) => {
    setTransaction({ ...transaction, category_id: event.value });
  };

  const onStatusChange = () => {
    setTransaction({ ...transaction, status: !status });
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
    <TransactionDropDownContainer id={ transaction_id }>
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
        <p>Status</p>
        <input
          type="button"
          id="status"
          name="status"
          value={ status ? "Cleared" : "Pending" }
          onClick={onStatusChange}
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
