import React from 'react';

//class or funcion here
class AddCommentForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         initialComments: props,
         comment: ""
      };

      console.log(this.state.initialComments);
    }

 // This will handle the change of state when user inputs into the form.
  // event.target.name = comment so comment: event.target.value which is input

  onUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();

  }

    render() {

        return(
        <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="comment"
              id="comment-form"
              value={this.state.input}
              onChange={this.onUpdate}
              />
            <button type="submit">Add Comment</button>
          </form>
        )
    }
}

export default AddCommentForm;

