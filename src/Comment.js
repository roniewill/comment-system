import React, { Component } from 'react';

class Comment extends Component {

	render() {
		return(

			<div className="media mt-3">

				<div className="media-body">
				    <h4 className="mt-1">{ this.props.comment.title }</h4>
				    <p>{ this.props.comment.comment }</p>
				</div>

			</div>
		);
	}
}

export default Comment;