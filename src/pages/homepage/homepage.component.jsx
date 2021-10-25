import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Navigation from "../../components/navigation/navigation.component";
import SideBar from "../../components/sidebar/sidebar.component";
import TransactionList from "../../components/transaction-list/transaction-list.component";
import Scroll from "../../components/scroll/scroll.component";
import { selectCurrentAccount } from "../../redux/account/account.selector";

import "./homepage.styles.scss";

const HomePage = ({ currentAccount }) => (
  <div className="homepage">
    <Navigation />
    <div className="account-transactions">
      <SideBar />
      <Scroll>
        <TransactionList />
      </Scroll>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentAccount: selectCurrentAccount,
});

export default connect(mapStateToProps)(HomePage);
