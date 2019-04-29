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

  
  render() {
    const objectOfDummyData = dummyData.map(object=>{
      return object;
    })
    console.log(objectOfDummyData);

    return (
      <div className="App">
        <h1>GhettoGram</h1>
        <div className='container'>
          <PostContainer arrayofObjects={objectOfDummyData} />
        </div>

      </div>
    );
  }
}


export default App;
