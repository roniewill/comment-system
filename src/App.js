import React, { Component } from 'react';

import MainNavBar from './MainNavBar';
import NewComment from './NewComment';
import Comments from './Comments';

class App extends Component {
  constructor(props) {
    super(props);

    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments: {}
    }
  }

  postNewComment(comment) {
    const comments = { ...this.state.comments }
    const timestamp = Date.now();
    comments[`comm-${timestamp}`] = comment;

    this.setState({
      comments: comments
    });
  }

  render() {
    return (
      <div>
        <MainNavBar />
        
        <div className="container">
          
          <NewComment postNewComment={ this.postNewComment }/>
          
          <Comments comments={ this.state.comments }/>

        </div>

      </div>
    );
  }
}

export default App;
