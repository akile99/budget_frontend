import React from "react";

import Navigation from "../../components/navigation/navigation.component";
import SideBar from "../../components/sidebar/sidebar.component";
import TransactionList from "../../components/transaction-list/transaction-list.component";
import Scroll from "../../components/scroll/scroll.component";
import InsertTransaction from "../../components/insert-transaction/insert-transaction.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Navigation />
    <InsertTransaction />
    <div className="account-transactions">
      <SideBar />
      <Scroll>
        <TransactionList />
      </Scroll>
    </div>
  </div>
);

export default HomePage;
