import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentBill } from "../../redux/bills/bills.selector";
import {
  updateSelectedBill,
  toggleEditBillDropdownHidden,
} from "../../redux/bills/bills.actions";

import { BillDropDownContainer } from "./edit-bill-dropdown.styles";

const BillEditDropDown = () => {
  const currentBill = useSelector(selectCurrentBill);
  const dispatch = useDispatch();
  const [bill, setBill] = useState({
    bill_id: currentBill.bill_id,
    date: new Date(currentBill.due_day).toISOString().slice(0, 10),
    vendor: currentBill.bill_name,
    category_id: currentBill.category_id,
    status: "Pending",
    amount: Number(currentBill.amount.replace(/[^0-9.-]+/g, "")) * -1,
    next_due_date: new Date().toISOString().slice(0, 10),
    bill_website: currentBill.bill_website,
  });
  const { vendor, amount, date, next_due_date } = bill;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setBill({ ...bill, [name]: value });
  };

  const handleEdit = () => {
    dispatch(updateSelectedBill(bill));
    dispatch(toggleEditBillDropdownHidden());
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
      <button onClick={handleEdit}>Update</button>
    </BillDropDownContainer>
  );
};

export default BillEditDropDown;
