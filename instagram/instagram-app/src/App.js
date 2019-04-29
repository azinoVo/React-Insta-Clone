import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       dummyData
    };
  }

  //dummydata is an array with lots of objects
  
  render() {
    
    return (
      <div className="App">
        <h1>GhettoGram</h1>
        <div className='container'>
          {/* objectDummy in map is each individual object from Dummy Array one at a time */}
          {this.state.map(objectDummy=>{
            <PostContainer objectDummy={objectDummy} />
          })}
        </div>

      </div>
    );
  }
}


export default App;
