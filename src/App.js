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

  postNewComment(comment) {
    const comments = { ...this.state.comments };
    const timestamp = Date.now();
    comments[`comm-${timestamp}`] = {
      comment,
      email: this.state.user.email,
      uid: this.state.user.uid
    };

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
    const {user} = this.state;
    //console.log(user);
    return (
      <Fragment>
        <MainNavBar />
        <div className="container">
          {!this.state.isAuth && <Login login={this.login} />}
          {this.state.isAuth && <User email={user.email} logout={this.logout} />}
          {this.state.isAuth && <NewComment postNewComment={this.postNewComment} />}
          <Comments comments={this.state.comments} />
        </div>
      </Fragment>
    );
  }
}

export default App;
