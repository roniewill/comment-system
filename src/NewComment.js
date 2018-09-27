import React, { Component } from "react";

class NewComment extends Component {
  constructor(props) {
    super(props);

    this.sendData = this.sendData.bind(this);
  }

  sendData = event => {
    const { user } = this.props;
    this.props.postNewComment({
      title: this.refs.titlecomment.value,
      comment: this.refs.yourcomment.value,
      email: user.email,
      uid: user.uid
    });

    this.refs.titlecomment.value = "";
    this.refs.yourcomment.value = "";

    event.preventDefault();
  };

  render() {
    const { titlecomment, yourcomment } = this.refs;
    return (
      <div className="row">
        <div className="col-sm-12 col-md-8 col-4">
          <form style={{ marginTop: 3 + "rem" }}>
            <div className="form-group">
              <label>Title:</label>
              <input
                className="form-control"
                ref="titlecomment"
                id="titlecomment"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Write your comment:</label>
              <textarea
                className="form-control"
                ref="yourcomment"
                id="yourcomment"
                rows="3"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.sendData}
							disabled={!yourcomment} 
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewComment;
