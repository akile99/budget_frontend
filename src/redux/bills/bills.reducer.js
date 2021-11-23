import BillActionTypes from "./bills.types";
import { addBillToUpcommingBills } from "./bills.utils";

const INITIAL_STATE = {
  billList: [],
  hideBillDropdown: true,
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
    case BillActionTypes.TOGGLE_BILL_HIDDEN:
      return {
        ...state,
        hideBillDropdown: !state.hideBillDropdown,
      };
    case BillActionTypes.SET_CURRENT_BILL:
      return {
        ...state,
        currentBill: action.payload,
      };
    default:
      return state;
  }
};

export default billReducer;
