import React from "react";

const invalidUser = ({ onRouteChange, isSignedIn }) => {
  return (
    <div>
      <h1 className="f3"> User and password combination do not exist</h1>
      <p
        onClick={() => onRouteChange("signout")}
        className="f3 link dim black underline pa3 pointer"
      >
        Try again
      </p>
    </div>
  );
};

export default invalidUser;
