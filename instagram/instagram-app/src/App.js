import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    
    return (
      <div>
        {/* <PostsPage /> */}
        <Login />
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}


export default App;
