import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { logOutUser } from "../../redux/user/user.action";

import "./navigation.styles.scss";

const Navigation = ({ currentUser, logOutUser }) => {
  return (
    <nav className="navigation">
      <p className="f3">{currentUser.firstname}</p>
      <p
        onClick={logOutUser}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign Out
      </p>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
