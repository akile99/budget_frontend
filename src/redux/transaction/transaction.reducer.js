import TransactionActionTypes from "./transaction.types";
import { addTransactionToList } from "./transaction.utils";

const INITIAL_STATE = {
  transactionList: [],
};

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionActionTypes.SET_TRANSACTIONS:
      return {
        ...state,
        transactionList: action.payload,
      };
    case TransactionActionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactionList: addTransactionToList(
          state.transactionList,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default transactionReducer;
