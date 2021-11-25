import { createSelector } from "reselect";

export const selectBills = (state) => state.bills;

export const selectBillList = createSelector(
  [selectBills],
  (bills) => bills.billList
);

export const selectCurrentBill = createSelector(
  [selectBills],
  (bills) => bills.currentBill
);

export const selectBillHidden = createSelector(
  [selectBills],
  (bills) => bills.hideBillDropdown
);

export const selectEditBillHidden = createSelector(
  [selectBills],
  (bills) => bills.hideEditBillDropdown
);
