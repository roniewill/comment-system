import React, { Component } from 'react';

class Comments extends Component {
	render(){
		return (
			<div className="row">

				<div className="col-sm-12 col-10">
					
					<hr />

					<div className="media mt-3">

					  <div className="media-body">
					    <h5 className="mt-0">Media heading</h5>
					    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					  </div>

					</div>

					{JSON.stringify(this.props.comments)}

				</div>

			</div>
		);
	}
}

export default Comments;