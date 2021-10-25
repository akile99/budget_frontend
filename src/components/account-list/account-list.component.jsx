import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { globalVars } from "../../hooks/global.js";
import { selectCurrentUser } from "../../redux/user/user.selector.js";
import { setAccounts } from "../../redux/account-list/account-list.action";
import { selectAccountList } from "../../redux/account-list/account-list.selector";

import Account from "../account/account.component";

import "./account-list.styles.scss";

const AccountList = ({ accountList, setAccounts, currentUser }) => {
  useEffect(() => {
    fetch(`${globalVars.HOST}accounts`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentUser.user_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data);
      });
  }, [currentUser.user_id, setAccounts]);

  return (
    <div>
      <div className="flex justify-center">
        <h2 className="Account">Accounts </h2>
      </div>
      {accountList.map((account) => (
        <div>
          <Account key={account.account_id} account={account} />
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAccounts: (accounts) => dispatch(setAccounts(accounts)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  accountList: selectAccountList,
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
