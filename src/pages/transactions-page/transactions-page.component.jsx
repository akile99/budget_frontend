import React from "react";

import Scroll from "../../components/scroll/scroll.component";
import TransactionList from "../../components/transaction-list/transaction-list.component";
import SideBar from "../../components/sidebar/sidebar.component";
import InsertTransaction from "../../components/insert-transaction/insert-transaction.component";

const TransactionPage = () => (
  <div className="account-transactions">
    <SideBar />
    <Scroll>
      <InsertTransaction />
      <TransactionList />
    </Scroll>
  </div>
);

export default TransactionPage;
