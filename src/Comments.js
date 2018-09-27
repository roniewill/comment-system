import React, { Component } from "react";

import Comment from "./Comment";

class Comments extends Component {
  renderComments(key, comment) {
    return <Comment key={key} comment={comment} />;
  }

  render() {
    const { comments } = this.props;
    return (
      <div className="row">
        <div className="col-sm-12 col-10">
          {Object.keys(comments).map(key =>
            this.renderComments(key, comments[key])
          )}
        </div>
      </div>
    );
  }
}

export default Comments;
