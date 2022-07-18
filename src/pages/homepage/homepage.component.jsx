import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import TransactionPage from "../transactions-page/transactions-page.component";
import BillsPage from "../bills-page/billspage.component";

import "./homepage.styles.scss";

const HomePage = () => {
  const main_page = "/budget_frontend";

  return (
    <div className="homepage">
      <Navigation />
      <div>
        <Switch>
          <Route exact path={`${main_page}/transactions`} component={TransactionPage} ></Route>
          <Route exact path={`${main_page}/bills`} component={BillsPage} ></Route>
        </Switch>
      </div>
    </div>
  );
};

export default HomePage;
