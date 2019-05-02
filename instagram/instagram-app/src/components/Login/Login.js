import React from 'react';

// Function

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
        }
    }

    login = event => {
        event.preventDefault();
        if(this.state.loggedIn === false) {
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
            this.setState({ loggedIn: true })
        } 
        else {
            this.setState({loggedIn: false})
            localStorage.removeItem('username');
            localStorage.removeItem('password');
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
                <p>Welcome {localStorage.getItem('username')}</p>
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