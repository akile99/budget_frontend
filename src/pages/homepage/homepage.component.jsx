import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import TransactionPage from "../transactions-page/transactions-page.component";
import BillsPage from "../bills-page/billspage.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Navigation />
    <div>
      <Switch>
        <Route exact path="/transactions" component={TransactionPage}></Route>
        <Route exact path="/bills" component={BillsPage}></Route>
      </Switch>
    </div>
  </div>
);

export default HomePage;
