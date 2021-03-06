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

  login = event => {
    this.props.login(this.state.email, this.state.passwd);
    event.preventDefault();
  };

  render() {
    const { isAuthError, authError, screenMode } = this.props;
    const errorMessages = {
      "auth/wrong-password": "E-mail or Password invalid",
      "auth/invalid-email": "Invalid E-mail",
      "auth/user-not-found": "User not found"
    };
    return (
      <div className="row mt-5">
        <div className="col-sm-12 col-10 mt-3">
          <h1>Login</h1>
          <form className="form-inline">
            <div className="form-group mb-2">
              <input
                type="email"
                onChange={this.handleChange("email")}
                placeholder="email"
                className="form-control"
              />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="password"
                className="form-control"
                onChange={this.handleChange("passwd")}
                placeholder="passwd"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this.login}
            >
              LogIn
            </button>
          </form>
          Don't have an account?
          <button
            type="button"
            className="btn btn-link"
            onClick={() => screenMode("signup")}
          >
            Click Here
          </button>
          {isAuthError && (
            <div className="alert alert-danger" role="alert">
              <strong>Error: </strong>
              {errorMessages[authError]}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
