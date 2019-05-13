import React from 'react';

// This component should be able to take in a component as an argument, 
// and it will return a `class` component.

const withAuthenticate = PostsPage => Login => 
    class extends React.Component {
        constructor(){
            super();
            this.state ={
                loggedIn: false
            }
        }

        componentDidMount(){
            if(localStorage.getItem('username') && localStorage.getItem('password'))  {
                this.setState({
                    loggedIn: true
                })
            }
        }


        render() {
            //some functionality
            if(this.state.loggedIn === true) {
                return <PostsPage />;
            }
           else {
               return <Login />;
           }
        }
    };
    

export default withAuthenticate;