import React from "react";

// import TransactionList from "../../components/transaction-list/transaction-list.component";
import AccountList from "../../components/account-list/account-list.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <AccountList />
  </div>
);

export default HomePage;
