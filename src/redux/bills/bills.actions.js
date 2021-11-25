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

export const toggleEditBillDropdownHidden = () => ({
  type: BillActionTypes.TOGGLE_EDIT_BILL_HIDDEN,
});

export const paySelectedBill = (bill) => ({
  type: BillActionTypes.PAY_BILL,
  payload: bill,
});

export const updateSelectedBill = (bill) => ({
  type: BillActionTypes.UPDATE_BILL,
  payload: bill,
});
