import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    passwd: ""
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  saveAccount = event => {
    this.props.createAccount(this.state.email, this.state.passwd);
    event.preventDefault();
  };

  render() {
    const { isSignUpError, signUpError, screenMode } = this.props;
    const errorMessages = {
      "auth/invalid-email": "Invalid E-mail",
      "auth/email-already-in-use": "This email already in use",
      "auth/weak-password": "Weak password"
    };
    return (
      <div className="row mt-5">
        <div className="col-sm-12 col-10 mt-3">
          <h1>New Account</h1>
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
              onClick={this.saveAccount}
            >
              Save
            </button>
          </form>
          You have an account?
          <button
            type="button"
            className="btn btn-link"
            onClick={() => screenMode("login")}
          >
            Click Here
          </button>
          {isSignUpError && (
            <div className="alert alert-danger" role="alert">
              <strong>Error: </strong>
              {errorMessages[signUpError]}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SignUp;
