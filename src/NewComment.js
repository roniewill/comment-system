import React, { Component } from 'react';
import { 
	Button,
	Form, 
	FormGroup, 
	Label, 
	Input } from 'reactstrap';

class NewComment extends Component {
	constructor(props){
		super(props);

		this.handleEnter = this.handleEnter.bind(this);
	}

	handleEnter( event ){
		if(event.keyCode===13){
			this.props.postNewComment({
				'title': 'Other new comment',
				'comment': 'This is an test comment'
			});
		}
	}

	render() {
		return (
			<div className="row">

				<div className="col-sm-12 col-md-8 col-4">

					<Form className="my-3">

						 <FormGroup>
				          <Label for="exampleText">Write your comment:</Label>
				          <Input type="textarea" name="yourcomment" onKeyDown={ this.handleEnter } id="yourComment" />
				        </FormGroup>
				        <Button>Submit</Button>

					</Form>

				</div>

			</div>
		)
	}
}

export default NewComment;
