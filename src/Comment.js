import React from "react";

const Comment = props => (
  <div className="card mt-3">
    <div className="card-body">
      <h4 className="mt-1">{props.comment.title}</h4>
      <p>{props.comment.comment}</p>
      <small className="text-muted">By: {props.comment.email ? props.comment.email : 'EMPTY'}</small>
    </div>
  </div>
);

export default Comment;
