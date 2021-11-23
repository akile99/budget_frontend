import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleBillDropdownHidden,
  setCurrentBill,
} from "../../redux/bills/bills.actions";
import { selectCurrentBill } from "../../redux/bills/bills.selector";

import { BillDropDownContainer } from "./bill-dropdown.styles";

const BillDropDown = () => {
  const currentBill = useSelector(selectCurrentBill);
  const { bill_id, bill_name, amount, due_day } = currentBill;
  const dispatch = useDispatch();

  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return month + "-" + day;
  };

  const handlePayment = () => {
    handleClose();
  };

  const handleClose = () => {
    dispatch(toggleBillDropdownHidden());
    dispatch(setCurrentBill(null));
  };

  return (
    <BillDropDownContainer id={bill_id}>
      <div>
        <p>Date</p>
        <p>{formatDate(due_day)} </p>
      </div>
      <div>
        <p>Vendor</p>
        <input type="text" id="vendor" name="vendor" value={bill_name} />
      </div>
      <div>
        <p>Payment</p>
        <input type="text" id="payment" name="payment" value={amount} />
      </div>
      <div>
        <p>Next Date</p>
        <input
          type="date"
          id="next_due_date"
          name="next_due_date"
          value={"11-02-2021"}
        />
      </div>
      <button onClick={handlePayment}>Commit</button>
      <button onClick={handleClose}>Cancel</button>
    </BillDropDownContainer>
  );
};

export default BillDropDown;
