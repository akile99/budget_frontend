import TransactionActionTypes from "./transaction.types";
import { addTransactionToList, updateStatus, updateTransaction } from "./transaction.utils";

const INITIAL_STATE = {
  transactionList: [],
  hideTransactionDropdown: true,
  hideEditTransactionDropdown: true,
  currentTransaction: null,
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
    case TransactionActionTypes.ADD_EXPENSE:
      return {
        ...state,
        transactionList: addTransactionToList(
          state.transactionList,
          action.payload
        ),
      };
    case TransactionActionTypes.UPDATE_STATUS:
      return {
        ...state,
        transactionList: updateStatus(
          state.transactionList,
          action.payload
        ),
      };
    case TransactionActionTypes.TOGGLE_TRANSACTION_HIDDEN:
      return {
        ...state,
        hideTransactionDropdown: !state.hideTransactionDropdown,
      };
    case TransactionActionTypes.TOGGLE_EDIT_TRANSACTION_HIDDEN:
      return {
        ...state,
        hideEditTransactionDropdown: !state.hideEditTransactionDropdown,
      };
    case TransactionActionTypes.SET_CURRENT_TRANSACTION:
      return {
        ...state,
        currentTransaction: action.payload,
      };
    case TransactionActionTypes.UPDATE_TRANSACTION:
      return {
        ...state,
        transactionToUpdate: updateTransaction(action.payload),
      };
    default:
      return state;
  }
};

export default transactionReducer;
