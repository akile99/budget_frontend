import BillActionTypes from "./bills.types";
import { addBillToUpcommingBills, payBill, updateBill } from "./bills.utils";

const INITIAL_STATE = {
  billList: [],
  hideBillDropdown: true,
  hideEditBillDropdown: true,
  currentBill: null,
};

const billReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BillActionTypes.SET_BILLS:
      return {
        ...state,
        billList: action.payload,
      };
    case BillActionTypes.ADD_BILL:
      return {
        ...state,
        billToAdd: addBillToUpcommingBills(state.billToAdd, action.payload),
      };
    case BillActionTypes.PAY_BILL:
      return {
        ...state,
        billToPay: payBill(action.payload),
      };
    case BillActionTypes.TOGGLE_BILL_HIDDEN:
      return {
        ...state,
        hideBillDropdown: !state.hideBillDropdown,
      };
    case BillActionTypes.TOGGLE_EDIT_BILL_HIDDEN:
      return {
        ...state,
        hideEditBillDropdown: !state.hideEditBillDropdown,
      };
    case BillActionTypes.SET_CURRENT_BILL:
      return {
        ...state,
        currentBill: action.payload,
      };
    case BillActionTypes.UPDATE_BILL:
      return {
        ...state,
        updateToBill: updateBill(action.payload),
      };
    default:
      return state;
  }
};

export default billReducer;
