import BillActionTypes from "./bills.types";

export const setBills = (bills) => ({
  type: BillActionTypes.SET_BILLS,
  payload: bills,
});

export const setCurrentBill = (bill) => ({
  type: BillActionTypes.SET_CURRENT_BILL,
  payload: bill,
});

export const toggleBillDropdownHidden = () => ({
  type: BillActionTypes.TOGGLE_BILL_HIDDEN,
});
