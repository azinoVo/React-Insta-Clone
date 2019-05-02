import React from 'react';
// import '../PostContainer/PostsPage.css';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      searchName: '',
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
    console.log(dummyData);
  }


  // Using a filtered State to store the filtered results is more effective since you can keep original
  // state for when user searches something outside the bounds

  onSubmit = event => {
    event.preventDefault();
    // map through copy of array of objectDummy, filtering the one with a specific profile that user type
    this.setState({
      dummyData: this.state.dummyData.filter(object => {
        if (object.username.includes(this.state.searchName)) {
          return object;
        }
      })
    })
  }


  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.value);
  }

  // dummydata is an array of objects

  render() {

    return (
      <div className="App">
        <h1>'Insta'Gram</h1>
        <SearchBar onSub={this.onSubmit} onChange={this.onChange} />
        <div className='container'>
          {/* objectDummy in map is each individual object from Dummy Array one at a time */}
          <PostContainer objectDummy={this.state.dummyData} />
        </div>
      </div>
    );
  }
}


export default PostsPage;
