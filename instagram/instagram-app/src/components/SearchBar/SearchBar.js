import React from 'react';
import styled from 'styled-components';


// Function or Class Here
const SearchWrap = styled.div `
      width:100%%;
      height:auto;
      text-align:center;
      background-color:lightblue;
  `

const SearchBar = props => {
    return (
        <SearchWrap>
            <form onSubmit={props.onSub}>
                <input
                    type="text"
                    name="searchName"
                    onChange={props.onChange} />
                <button type="submit">Sort by Name</button>
            </form>
        </SearchWrap>
    );
}


export default SearchBar;