import React, { Component, Fragment } from "react";

import MainNavBar from "./MainNavBar";
import NewComment from "./NewComment";
import Comments from "./Comments";
import Login from "./Login";
import User from './User';

class App extends Component {
  constructor(props) {
    super(props);

    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments: {},
      isAuth: false,
      authError: "",
      isAuthError: false,
      user: {}
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
      }else{
        this.setState({
          isAuth: false,
          user: {}
        });
      }
    });
  }

  postNewComment = comment => {
    const comments = { ...this.state.comments };
    const { user } = this.state;
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

  logout = () => {
    const { auth } = this.props;
    auth.signOut();
  }

  render() {
    const {user, isAuthError, authError} = this.state;
    //console.log(user);
    return (
      <Fragment>
        <MainNavBar />
        <div className="container">
          {!this.state.isAuth && <Login login={this.login} isAuthError={isAuthError} authError={authError}/>}
          {this.state.isAuth && <User email={user.email} logout={this.logout} />}
          {this.state.isAuth && <NewComment postNewComment={this.postNewComment} user={user}/>}
          <Comments comments={this.state.comments} />
        </div>
      </Fragment>
    );
  }
}

export default App;
