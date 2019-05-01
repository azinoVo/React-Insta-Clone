import React from 'react';
import './SearchBar.css'

// Function or Class Here

const SearchBar = props => {
    return (
        <div className='searchbar'>
            <form onSubmit={props.onSub}>
                <input
                    type="text"
                    name="searchName"
                    onChange={props.onChange} />
                <button type="submit">Sort by Name</button>
            </form>
        </div>
    );
}


export default SearchBar;