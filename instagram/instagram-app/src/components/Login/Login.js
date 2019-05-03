import React from 'react';
import styled from 'styled-components';
import '../Login/Login.css'
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';



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
        if (localStorage.getItem('{this.state.username}') === this.state.username
            && localStorage.getItem('{this.state.password}') === this.state.password) {
            this.setState({
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
                <p>Welcome to InstaGram-ish {this.state.username}</p>
                  
                <Form onSubmit={this.login}>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input 
                                type="text" 
                                name="username"  
                                placeholder="johndoe@gmail.com"
                                onChange={this.handleChanges} />
                                
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input 
                                type="password" 
                                name="password" 
                                placeholder="...input password"
                                onChange={this.handleChanges} />
                        </Col>
                    </FormGroup>
                    <Button>Login</Button>
                    </Form>
            </div>
                )
        
            }
        
        }
        
export default Login;