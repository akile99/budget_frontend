import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import SignInOrSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { selectCurrentUser } from "./redux/user/user.selector";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  return <div>{currentUser ? <HomePage /> : <SignInOrSignUpPage />}</div>;
};

export default App;
