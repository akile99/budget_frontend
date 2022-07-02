import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import {
  toggleBillDropdownHidden,
  setCurrentBill,
  paySelectedBill,
} from "../../redux/bills/bills.actions";
import { selectCurrentBill } from "../../redux/bills/bills.selector";
import { selectAccountList } from "../../redux/account/account.selector";

import { BillDropDownContainer } from "./bill-dropdown.styles";

const BillDropDown = () => {
  const currentBill = useSelector(selectCurrentBill);
  const accounts = useSelector(selectAccountList);
  const dispatch = useDispatch();
  const d = new Date(currentBill.due_day);
  const next_month = d.setMonth(d.getMonth() + 1);
  const [bill, setBill] = useState({
    bill_id: currentBill.bill_id,
    date: new Date(currentBill.due_day).toISOString().slice(0, 10),
    vendor: currentBill.bill_name,
    category_id: currentBill.category_id,
    status: "Pending",
    amount: Number(currentBill.amount.replace(/[^0-9.-]+/g, "")) * -1,
    account_id: "",
    next_due_date: new Date(next_month).toISOString().slice(0, 10),
    bill_website: currentBill.bill_website,
  });
  const { vendor, amount, date, next_due_date } = bill;

  accounts.forEach(
    (e) => (
      // eslint-disable-next-line no-sequences
      (e.value = e.account_id),
      (e.label = e.account_name + " " + e.account_type)
    )
  );

  const handleChange = (event) => {
    const { value, name } = event.target;

    setBill({ ...bill, [name]: value });
  };

  const handleAccountChange = (event) => {
    setBill({ ...bill, account_id: event.account_id });
  };

  const handlePayment = () => {
    handleClose();

    dispatch(paySelectedBill(bill));
  };

  const handleClose = () => {
    dispatch(toggleBillDropdownHidden());
    dispatch(setCurrentBill(null));
  };

  return (
    <BillDropDownContainer id={currentBill.bill_id}>
      <div>
        <p>Date</p>
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
        <p>Account</p>
        <Select
          defaultValue={accounts[0]}
          options={accounts}
          onChange={handleAccountChange}
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
      <div>
        <p>Next Date</p>
        <input
          type="date"
          id="next_due_date"
          name="next_due_date"
          value={next_due_date}
          onChange={handleChange}
        />
      </div>
      <button onClick={handlePayment}>Commit</button>
      <button onClick={handleClose}>Cancel</button>
    </BillDropDownContainer>
  );
};

export default BillDropDown;
