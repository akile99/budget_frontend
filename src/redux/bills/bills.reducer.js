import BillActionTypes from "./bills.types";

const INITIAL_STATE = {
  bills: [],
};

const billReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BillActionTypes.ADD_BILL:
      return {
        ...state,
        billToAdd: addBillToUpcommingBills(state.billToAdd, action.payload),
      };
    default:
      return state;
  }
};

export default billReducer;
