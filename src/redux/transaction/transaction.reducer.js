import TransactionActionTypes from "./transaction.types";
import { loadTransactions } from "./transaction.utils";

const INITIAL_STATE = {
  transactionList: [],
};

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionActionTypes.SET_TRANSACTIONS:
      return {
        ...state,
        transactionList: loadTransactions(
          state.transactionList,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default transactionReducer;
