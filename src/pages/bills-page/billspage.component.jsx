import React from "react";
import { useSelector } from "react-redux";

import BillDropDown from "../../components/bill-dropdown/bill-dropdown.component";

import Bills from "../../components/bills/bills.component";

import { selectBillHidden } from "../../redux/bills/bills.selector";

import "./billspage.styles.scss";

const BillsPage = () => {
  const hideBillDropdown = useSelector(selectBillHidden);
  return (
    <div>
      <Bills />
      {hideBillDropdown ? null : <BillDropDown />}
    </div>
  );
};

export default BillsPage;
