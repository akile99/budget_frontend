import React from "react";
import { useSelector } from "react-redux";

import BillDropDown from "../../components/bill-dropdown/bill-dropdown.component";
import BillEditDropDown from "../../components/edit-bill-dropdown/edit-bill-dropdown.component";

import Bills from "../../components/bills/bills.component";

import {
  selectBillHidden,
  selectEditBillHidden,
} from "../../redux/bills/bills.selector";

import "./billspage.styles.scss";

const BillsPage = () => {
  const hideBillDropdown = useSelector(selectBillHidden);
  const hideEditBillDropdown = useSelector(selectEditBillHidden);

  return (
    <div>
      <Bills />
      {hideBillDropdown ? null : <BillDropDown />}
      {hideEditBillDropdown ? null : <BillEditDropDown />}
    </div>
  );
};

export default BillsPage;
