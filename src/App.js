import React, { Component } from "react";

import MainNavBar from "./MainNavBar";
import NewComment from "./NewComment";
import Comments from "./Comments";
import Login from "./Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments: {},
      isAuth: false,
      authError: "",
      isAuthError: false
    };

    this.refComments = this.props.base.syncState("comments", {
      context: this,
      state: "comments"
    });
  }

  componentDidMount(){
    const { auth } = this.props;

    auth.onAuthStateChanged( user => {
      if(user){
        this.setState({
          isAuth: true,
          user
        });
      }
    });
  }

  postNewComment(comment) {
    const comments = { ...this.state.comments };
    const timestamp = Date.now();
    comments[`comm-${timestamp}`] = comment;

    this.setState({
      comments: comments
    });
  }

  login = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({
      authError: "",
      isAuthError: false
    });
    try {
      await auth.signInWithEmailAndPassword(email, passwd);
    } catch (error) {
      this.setState({
        authError: error.code,
        isAuthError: true
      });
    }
  };

  render() {
    return (
      <div>
        <MainNavBar />

        <div className="container">
          {!this.state.isAuth && <Login login={this.login} />}

          {this.state.isAuth && (
            <NewComment postNewComment={this.postNewComment} />
          )}

          <Comments comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default App;
