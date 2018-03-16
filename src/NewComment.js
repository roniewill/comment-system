import React, { Component } from 'react';
import { 
	Button,
	Form, 
	FormGroup, 
	Label, 
	Input, 
	FormText } from 'reactstrap';

class NewComment extends Component {
	render() {
		return (
			<div className="row">

				<div className="col-sm-12 col-md-8 col-4">

					<Form>

						 <FormGroup>
				          <Label for="exampleText">Write your comment:</Label>
				          <Input type="textarea" name="yourcomment" id="yourComment" />
				        </FormGroup>
				        <Button>Submit</Button>

					</Form>

				</div>

			</div>
		)
	}
}

export default NewComment;
