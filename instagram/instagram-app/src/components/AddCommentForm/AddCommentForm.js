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
    console.log(event.target.value);
  }

  // This is supposed to change the state but I get an error
  // this.state.initialComments is not iterable - think it's because I'm trying to change the initial data
  onSubmit = event => {
    event.preventDefault();
    this.setState({
        initialComments: [
            ...this.state.initialComments, 
            {username:'User', text:event.target.value}
        ]})
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

