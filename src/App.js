import React, { Component, Fragment } from "react";

import MainNavBar from "./MainNavBar";
import NewComment from "./NewComment";
import Comments from "./Comments";
import Login from "./Login";
import User from "./User";
import SingUp from "./SingUp";

class App extends Component {
  constructor(props) {
    super(props);

    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments: {},
      isAuth: false,
      authError: "",
      isAuthError: false,
      signUpError: "",
      isSignUpError: false,
      user: {},
      screenMode: "login"
    };

    this.refComments = this.props.base.syncState("comments", {
      context: this,
      state: "comments"
    });
  }

  componentDidMount() {
    const { auth } = this.props;

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuth: true,
          user
        });
      } else {
        this.setState({
          isAuth: false,
          user: {}
        });
      }
    });
  }

  postNewComment = comment => {
    const comments = { ...this.state.comments };
    const timestamp = Date.now();
    comments[`comm-${timestamp}`] = comment;
    this.setState({
      comments: comments
    });
  };

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

  createAccount = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({
      signUpError: "",
      isSignUpError: false
    });
    try {
      await auth.createUserWithEmailAndPassword(email, passwd);
    } catch (error) {
      this.setState({
        signUpError: error.code,
        isSignUpError: true
      });
    }
  };

  logout = () => {
    const { auth } = this.props;
    auth.signOut();
  };

  changeScreen = screenMode => this.setState({ screenMode });

  render() {
    const {
      user,
      isAuth,
      screenMode,
      isAuthError,
      authError,
      signUpError,
      isSignUpError,
      comments
    } = this.state;
    //console.log(user);
    return (
      <Fragment>
        <MainNavBar />
        <div className="container">
          {!isAuth &&
            screenMode === "login" && (
              <Login
                login={this.login}
                isAuthError={isAuthError}
                authError={authError}
                screenMode={this.changeScreen}
              />
            )}
          {!isAuth && screenMode === "signup" && (
            <SingUp
              createAccount={this.createAccount}
              signUpError={signUpError}
              isSignUpError={isSignUpError}
              screenMode={this.changeScreen}
            />
          )}
          {isAuth && <User email={user.email} logout={this.logout} />}
          {isAuth && (
            <NewComment postNewComment={this.postNewComment} user={user} />
          )}
          <Comments comments={comments} />
        </div>
      </Fragment>
    );
  }
}

export default App;
