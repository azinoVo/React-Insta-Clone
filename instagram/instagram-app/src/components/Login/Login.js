import React from 'react';
import styled from 'styled-components';
import '../Login/Login.css'


// Function

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            newUser: true
        }
    }

    // Set a conditional that compares with information on state - use a newUser state
    // loggedIn should be a newUser state if the information on state does not match
    // Set the name of username within local storage within the condition

    login = () => {
        // event.preventDefault();
        if(localStorage.getItem('{this.state.username}') === this.state.username 
        && localStorage.getItem('{this.state.password}') === this.state.password ) {
            this.setState ({
                newUser: false
            })
            window.location.reload();
                        } 
        else {
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
        }
            
        }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state.username, this.state.password)
    }

    render() {

        return (
            <div className='form-container'>
                <p>Welcome to InstaGram-ish {localStorage.getItem('username')}</p>
                <form onSubmit={this.login} >


                    <label>User: </label>
                    <input
                        type="text"
                        name="username"
                        onChange={this.handleChanges} />



                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChanges} />


                    <button>Login</button>

                </form>
            </div>
        )

    }

}

export default Login;