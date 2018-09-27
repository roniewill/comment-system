import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    passwd: ""
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  login = () => {
    this.props.login(this.state.email, this.state.passwd);
  };

  render() {
    const { isAuthError, authError } = this.props;
    const errorMessages = {
      "auth/wrong-password": "E-mail or Password invalid",
      "auth/invalid-email": "Invalid E-mail",
      "auth/user-not-found": "User not found"
    };
    return (
      <div className="row mt-5">
        <div className="col-sm-12 col-10 mt-3">
          <h1>Login</h1>
          <input
            type="email"
            onChange={this.handleChange("email")}
            placeholder="email"
          />
          <input
            type="password"
            onChange={this.handleChange("passwd")}
            placeholder="passwd"
          />
          <button onClick={this.login}>LogIn</button>
          {isAuthError && (
            <div className="alert alert-danger" role="alert">
              {errorMessages[authError]}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
