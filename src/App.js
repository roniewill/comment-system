import React, { Component } from 'react';

import MainNavBar from './MainNavBar';
import NewComment from './NewComment';

class App extends Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <div className="container">
          <NewComment />
        </div>
      </div>
    );
  }
}

export default App;
