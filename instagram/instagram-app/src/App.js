import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';



const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
  

    return (
        <ComponentFromWithAuthenticate />
    );
  }
}


export default App;
