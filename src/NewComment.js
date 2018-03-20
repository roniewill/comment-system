import React, { Component } from 'react';


class NewComment extends Component {
	constructor(props){
		super(props);

		this.sendData = this.sendData.bind(this);
	}

	sendData( event ){
		
		this.props.postNewComment({
			'title': this.refs.titlecomment.value,
			'comment': this.refs.yourcomment.value
		});

		console.log(this.refs.titlecomment.value + ' \n ' + this.refs.yourcomment.value);
		

		this.refs.titlecomment.value = "";
		this.refs.yourcomment.value = "";
	}

	render() {
		return (
			<div className="row">

				<div className="col-sm-12 col-md-8 col-4">

					<form style={{ marginTop: 5 + 'rem' }}>

						<div className="form-group">
							<label>Title:</label>
							<input className="form-control" ref="titlecomment" id="titlecomment" rows="3" />
						</div>

						<div className="form-group">
							<label>Write your comment:</label>
							<textarea className="form-control" ref="yourcomment" id="yourcomment" rows="3"></textarea>
						</div>
						<input type="button" className="btn btn-primary" value="Send data" onClick={ this.sendData } />

					</form>

				</div>

			</div>
		)
	}
}

export default NewComment;
