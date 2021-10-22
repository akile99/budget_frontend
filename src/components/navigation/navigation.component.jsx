import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";

import "./navigation.styles.scss";

const Navigation = ({ currentUser }) => {
  return (
    <nav className="navigation">
      <p className="f3">{currentUser.firstname}</p>
      <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Navigation);
