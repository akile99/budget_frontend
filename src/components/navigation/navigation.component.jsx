import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { logOutUser } from "../../redux/root.action";
import { selectCurrentAccount } from "../../redux/account/account.selector";

import DropDownMenu from "../dropdown-menu/dropdown-menu.component";

import "./navigation.styles.scss";

const Navigation = ({ currentUser, logOutUser, currentAccount }) => {
  return (
    <nav className="navigation">
      <div>
        <DropDownMenu />
      </div>
      <div className="userInfo">
        {currentAccount ? <p className="f3">{currentAccount.balance}</p> : null}

        <p className="f3">{currentUser.firstname}</p>
        <p
          onClick={() => {
            logOutUser();
          }}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </div>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentAccount: selectCurrentAccount,
});

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutUser()),
  // clearAccount: () => dispatch(clearAccount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
