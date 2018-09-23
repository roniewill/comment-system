import React, { Component } from "react";

class Login extends Component {
  state = {
    email: '',
    passwd: ''  
  }

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  login = () => {
    this.props.login(this.state.email, this.state.passwd);
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col-sm-12 col-10">
          <h1>Login</h1>
          <input type="email" onChange={this.handleChange('email')} placeholder="email" />
          <input type="password" onChange={this.handleChange('passwd')} placeholder="passwd" />
          <button onClick={this.login}>LogIn</button>
        </div>
      </div>
    );
  }
}

export default Login;
