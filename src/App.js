import React, { Component } from 'react';

import MainNavBar from './MainNavBar';
import NewComment from './NewComment';
import Comments from './Comments';

class App extends Component {
  constructor(props) {
    super(props);

    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments: {
        '1': {
          'title': 'This a new comment',
          'comment': "I dont like comment here, I don't want!"
        },
        '2': {
          'title': 'II This a new comment',
          'comment': "I dont like comment here, I don't want!"
        },
        '3': {
          'title': 'III This a new comment',
          'comment': "I dont like comment here, I don't want!"
        }
      }
    }
  }

  postNewComment(comment) {
    this.setState({
      comments: {
        ...this.state.comments, comment
      }
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
