import React from "react";
import { useSelector } from "react-redux";

import { selectEditTransactionHidden } from "../../redux/transaction/transaction.selector";

import Scroll from "../../components/scroll/scroll.component";
import TransactionList from "../../components/transaction-list/transaction-list.component";
import TransactionEditDropDown from "../../components/edit-transaction-dropdown/edit-transaction-dropdown.component";
import SideBar from "../../components/sidebar/sidebar.component";
import InsertTransaction from "../../components/insert-transaction/insert-transaction.component";

import { TransactionPageContainer } from "./transactions-page.styles";

const TransactionPage = () => {
  const hideEditTransactionDropdown = useSelector(selectEditTransactionHidden);

  return (  
    <TransactionPageContainer>
      <SideBar />
      <Scroll>
        <InsertTransaction />
        <TransactionList />
        {hideEditTransactionDropdown ? null : <TransactionEditDropDown />}
      </Scroll>
    </TransactionPageContainer>
  );
};

export default TransactionPage;
