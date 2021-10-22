import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./sign-in.styles.scss";

import { globalVars } from "../../hooks/global";
import { setCurrentUser } from "../../redux/user/user.action";

import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  verifySignIn = async () => {
    const { email, password } = this.state;
    if (email && password) {
      this.setState({ loading: true });
      await fetch(globalVars.HOST + "signin", {
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
            this.props.setCurrentUser({
              user_id: user[0].user_id,
              firstname: user[0].firstname,
            });
          }
        });
    }
    await this.props.history.push("/");
  };

  handleSubmit = (event) => {
    const { email, password } = this.state;

    event.preventDefault();
    const user = { email: email, password: password };
    this.verifySignIn(user);
    this.setState({ loading: true });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <form onSubmit={this.handleSubmit}>
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                label="email"
                required
              />
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Password
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
