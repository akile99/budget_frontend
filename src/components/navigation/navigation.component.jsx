import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { logOutUser } from "../../redux/root-action";
import { selectCurrentAccount } from "../../redux/account/account.selector";

import AccountInfo from "../account-info/account-info.component";
import DropDownMenu from "../dropdown-menu/dropdown-menu.component";

import {
  NavigationContainer,
  NavigationInfo,
  NavigationSignOut,
} from "./navigation.styles";

const Navigation = ({ logOutUser }) => {
  return (
    <NavigationContainer>
      <div>
        <DropDownMenu />
      </div>
      <NavigationInfo>
        <AccountInfo />
        <NavigationSignOut
          onClick={() => {
            logOutUser();
          }}
        >
          Sign Out
        </NavigationSignOut>
      </NavigationInfo>
    </NavigationContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentAccount: selectCurrentAccount,
});

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
