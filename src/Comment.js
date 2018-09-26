import React from "react";

const Comment = props => (
  <div className="media mt-3">
    <div className="media-body">
      <h4 className="mt-1">{props.comment.title}</h4>
      <p>{props.comment.comment}</p>
    </div>
  </div>
);

export default Comment;
