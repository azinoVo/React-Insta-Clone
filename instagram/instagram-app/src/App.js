import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       dummyData: dummyData,
    };
  }

  // dummydata is an array with lots of objects
  
  render() {
    //sets up an array of the individual objects within dummyData
    // let objectDummy = this.state.dummyData.map(object=>{
    //   return object;
    // })
    // console.log(objectDummy);
    
// Put the form within its own component or within post container when finished
    return (
      <div className="App">
        <h1>'Insta'Gram</h1>
        <div className='container'>
          {/* objectDummy in map is each individual object from Dummy Array one at a time */}
            <PostContainer objectDummy={this.state.dummyData} />
        </div>

      </div>
    );
  }
}


export default App;
