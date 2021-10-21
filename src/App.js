import React, { useState } from "react";
import "./App.css";
import SignIn from "./pages/sign-in/sign-in.component";
import Register from "./pages/sign-up/sign-up.component";
import UpcomingBills from "./pages/bills-page/billspage.component";

import { globalVars } from "./hooks/global";

import InvalidUser from "./components/InvalidUser/InvalidUser.js";
import Navigation from "./components/Navigation/Navigation.js";
import AccountBalance from "./components/AccountBalance/AccountBalance.js";
import AccountPending from "./components/AccountBalance/AccountPending.js";
import Scroll from "./components/Scroll/Scroll.js";
import TransactionList from "./components/Transactions/TransactionList.js";
import NewAccount from "./components/NewAccount/NewAccount.js";
import InputTransaction from "./components/InputTransaction/InputTransaction.js";
import AccountList from "./components/Accounts/AccountList.js";

import useSessionStorage from "./hooks/useSessionStorage.js";
import useBalance from "./hooks/useBalance.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const host = globalVars.HOST;
  const [name, setName] = useSessionStorage("name", "");
  const [user_id, setuser_id] = useSessionStorage("user_id", "");
  const [isSignedIn, setIsSignedIn] = useSessionStorage("isSignedIn", false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [account_id, setAccountid] = useSessionStorage("account_id", "");
  const [sideBarOpen, setSideBarOpen] = useSessionStorage("sideBar", true);
  const [submit, setSubmit] = useState(false);
  const d = new Date();
  d.setDate(d.getDate() - 60);
  // const [from_date, setFrom_Date] = useState(d.toISOString().split('T')[0])
  // const [to_date, setTo_Date] = useState(new Date().toISOString().split('T')[0])
  const to_date = new Date().toISOString().split("T")[0];
  const from_date = d.toISOString().split("T")[0];

  const [createAccount, setCreateAccount] = useState(false);

  // const [searchDate, setSearchDate] = useState(false)
  const [billsPage, setBillsPage] = useState(true);
  const [insert, setInsert] = useState(false);

  const [balance, balanceColor] = useBalance(
    account_id,
    host,
    "sumCleared",
    submit
  );

  // const onFrom_DateChange = (event) => {
  // 	setFrom_Date(event.target.value)
  // }

  // const handleSearchDate = () => {
  // 	setSearchDate(!searchDate);
  // }

  const handleSignIn = (user_id, firstname) => {
    if (user_id !== -1) {
      setName(firstname);
      setuser_id(user_id);
      setIsSignedIn(true);
    } else {
      setuser_id(-1);
    }
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setuser_id("");
    setAccountid("");
    setName("");
    setInsert(false);
    sessionStorage.clear();
  };

  const handleRegistered = () => {
    setIsRegistered(!isRegistered);
  };

  const handleLoadAccount = (account_id) => {
    setAccountid(account_id);
  };

  const handleInputChange = () => {
    setSubmit(!submit);
  };

  const handelNewAccount = () => {
    setCreateAccount(!createAccount);
  };

  const handelSideBarOpenClose = () => {
    setSideBarOpen(!sideBarOpen);
  };

  // const onTo_DateChange = (event) => {
  // 	setTo_Date(event.target.value)
  // }

  const handelShowBills = () => {
    setBillsPage(true);

    setInsert(false);
    async function removeItem(key) {
      setAccountid("");
      await sessionStorage.removeItem(key);
    }
    removeItem("account_id");
  };

  const handelShowAccounts = () => {
    setBillsPage(false);
  };

  const handleInsertChange = () => {
    setInsert(!insert);
  };

  return (
    <div className="App">
      {!isSignedIn ? (
        <div id="Register">
          {!isRegistered ? (
            <Register
              onChange={handleSignIn}
              onRegisterChange={handleRegistered}
            />
          ) : (
            <div>
              {user_id === -1 ? (
                <InvalidUser onRouteChange={handleSignOut} />
              ) : (
                <SignIn
                  onChange={handleSignIn}
                  onRegisterChange={handleRegistered}
                />
              )}
            </div>
          )}
        </div>
      ) : (
        <div id="LandingPage">
          <nav>
            <div className="menu">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <FontAwesomeIcon icon={faBars} size="2x" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {!billsPage || account_id ? (
                    <div>
                      {account_id ? (
                        <div>
                          <Dropdown.Item onClick={handleInsertChange}>
                            Add Transaction
                          </Dropdown.Item>
                          <Dropdown.Item onClick={handelShowBills}>
                            Bills
                          </Dropdown.Item>
                        </div>
                      ) : (
                        <Dropdown.Item onClick={handelShowBills}>
                          Bills
                        </Dropdown.Item>
                      )}
                    </div>
                  ) : (
                    <div>
                      <Dropdown.Item onClick={handelShowAccounts}>
                        Accounts
                      </Dropdown.Item>
                    </div>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="Navigation">
              {account_id ? (
                <div className="Navigation">
                  <p>Actual</p>
                  <AccountBalance
                    className="f3"
                    account_id={account_id}
                    submit={submit}
                  />
                  <AccountPending
                    className="f3"
                    account_id={account_id}
                    submit={submit}
                  />
                </div>
              ) : (
                <p></p>
              )}
              <Navigation
                isSignedIn={isSignedIn}
                name={name}
                onRouteChange={handleSignOut}
              />
            </div>
          </nav>
          {insert ? (
            <div id="insertTransaction">
              <InputTransaction
                account_id={account_id}
                host={host}
                submit={submit}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <div></div>
          )}
          <div id="MainPage">
            <div id="Sidebar" className="outline ">
              {sideBarOpen ? (
                <div>
                  {createAccount ? (
                    <div>
                      <NewAccount user_id={user_id} />
                      <button onClick={handelNewAccount}>exit</button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <Scroll>
                    <div id="Sidebar">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faChevronLeft}
                        onClick={handelSideBarOpenClose}
                      />
                      <AccountList
                        key={user_id}
                        user_id={user_id}
                        host={host}
                        o
                        onChange={handleLoadAccount}
                        submit={submit}
                      />
                    </div>
                  </Scroll>
                </div>
              ) : (
                <FontAwesomeIcon
                  size="2x"
                  icon={faChevronRight}
                  onClick={handelSideBarOpenClose}
                />
              )}
            </div>
            <div id="Transaction">
              {billsPage && !account_id ? (
                <Scroll>
                  <UpcomingBills key={user_id} host={host} user_id={user_id} />
                </Scroll>
              ) : (
                <div>
                  {!account_id ? (
                    <p></p>
                  ) : (
                    <Scroll>
                      <TransactionList
                        key={account_id}
                        account_id={account_id}
                        host={host}
                        submit={submit}
                        onChange={handleInputChange}
                        from_date={from_date}
                        to_date={to_date}
                      />
                    </Scroll>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
