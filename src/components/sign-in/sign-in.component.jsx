import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

import { setCurrentUser } from "../../redux/user/user.action";

import "./sign-in.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      fetch("https://star-ship-enterprise.herokuapp.com/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user !== "wrong credentials") {
            dispatch(setCurrentUser(user[0]));
            // history.replace("./");
          } else {
            alert("Username and Password combination does not exist");
          }
        });
    } else if (!email) {
      alert("missing email!!");
    } else if (!password) {
      alert("missing password!!");
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <legend className="f1 fw6 ph0 mh0">Sign In</legend>
          <form onSubmit={handleSubmit}>
            <label className="db fw6 lh-copy f6" htmlFor="name">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              label="email"
              required
            />
            <label className="db fw6 lh-copy f6" htmlFor="name">
              Password
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              label="password"
              required
            />
            <div className="buttons">
              <CustomButton type="submit">{`Sign In`}</CustomButton>
            </div>
          </form>
        </div>
      </main>
    </article>
  );
};

export default SignIn;
