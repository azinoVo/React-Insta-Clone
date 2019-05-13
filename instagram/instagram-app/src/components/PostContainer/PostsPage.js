import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components';


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

  logOut = () => {
    localStorage.clear();
    window.location.reload();
}


  render() {


    const HeadWrap = styled.h1`
      text-align:center;
    `

    const LogOutWrap = styled.div`
    display:flex;
    align-content:center;
    justify-content:space-between;
    margin:3%;
    border-bottom:1px solid black;    

    `

    const ContainerWrap = styled.div`
        width:75%;
        height:auto;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-content:center;
        margin: 0 auto;
    `

    return (
      <div>
        <HeadWrap>'Insta'Gram</HeadWrap>
        <SearchBar onSub={this.onSubmit} onChange={this.onChange} />
        <LogOutWrap>
          <p>Welcome {localStorage.getItem('username')}</p>
          <span><button onClick={this.logOut}>Log Out</button></span>
        </LogOutWrap>
        <ContainerWrap>
          <PostContainer objectDummy={this.state.dummyData} />
        </ContainerWrap>
      </div>
    );
  }
}


export default PostsPage;
