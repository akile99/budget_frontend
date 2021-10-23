import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import SignInOrSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/budget_frontend/"
            render={() =>
              this.props.currentUser ? (
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
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
