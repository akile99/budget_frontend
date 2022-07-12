import React from "react";
import { useDispatch } from "react-redux";
// import { formatDate } from "../../hooks/global";

import {
  toggleBillDropdownHidden,
  toggleEditBillDropdownHidden,
  setCurrentBill,
} from "../../redux/bills/bills.actions";

const Bill = ({ bill }) => {
  const { bill_id, bill_name, bill_website, due_day, amount } = bill;
  const dispatch = useDispatch();

  function getDay(date) {
    const d = new Date(date);
    const day = d.getUTCDate();
    const month = d.getUTCMonth() + 1;

    return month + "/" + day;
  }

  const formatedDay = getDay(due_day);

  const handlePayBill = () => {
    dispatch(toggleBillDropdownHidden());
    dispatch(setCurrentBill(bill));
    if (bill_website) {
      goToWebSite();
    }
  };

  const handleEditBill = () => {
    dispatch(setCurrentBill(bill));
    dispatch(toggleEditBillDropdownHidden());
  };

  const goToWebSite = () => {
    window.open(bill_website, "_blank");
  };

  return (
    <div className="billDiv" id={bill_id}>
      <p className="bill">{formatedDay}</p>
      <p className="vendor">{bill_name}</p>
      <p className="bill">{amount}</p>
      <p className="bill paybill" onClick={handlePayBill}>
        Pay
      </p>
      <p className="bill editbill paybill" onClick={handleEditBill}>
        Edit
      </p>
    </div>
  );
};

export default Bill;
