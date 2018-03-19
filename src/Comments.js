import React, { Component } from 'react';

import Comment from './Comment';

class Comments extends Component {

	renderComments(key, comment) {
		return (
			<Comment key={ key } comment={ comment } />
		)
	}

	render(){
		return (
			<div className="row">

				<div className="col-sm-12 col-10">
					
					<hr />

					 { Object.keys(this.props.comments).map( key => this.renderComments(key, this.props.comments[key] ) ) }

				</div>

			</div>
		);
	}
}

export default Comments;