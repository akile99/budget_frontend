import React from "react";

import Scroll from "../../components/scroll/scroll.component";
import TransactionList from "../../components/transaction-list/transaction-list.component";
import SideBar from "../../components/sideBar/sidebar.component";
import InsertTransaction from "../../components/insert-transaction/insert-transaction.component";

import { TransactionPageContainer } from "./transactions-page.styles";

const TransactionPage = () => (
  <TransactionPageContainer>
    <SideBar />
    <Scroll>
      <InsertTransaction />
      <TransactionList />
    </Scroll>
  </TransactionPageContainer>
);

export default TransactionPage;
