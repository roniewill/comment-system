import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-sm-12 col-10 mt-2">
          <h3>User logged as: {this.props.email}</h3>
          <button type="button" className="btn btn-danger" onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default User;
