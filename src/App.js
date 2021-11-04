import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { useSelector } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import SignInOrSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { selectCurrentUser } from "./redux/user/user.selector";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/budget_frontend/"
          render={() =>
            currentUser ? (
              <HomePage />
            ) : (
              <Redirect to="/budget_frontend/signin" />
            )
          }
        />
        <Route
          exact
          path="/budget_frontend/signin"
          component={SignInOrSignUpPage}
        />
      </Switch>
    </div>
  );
};

export default App;
