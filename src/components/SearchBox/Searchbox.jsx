import React from 'react';
import './Searchbox.css';

const SearchBox = ({ onInputChage }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChage(event.target.value)}
                placeholder="Type keywords"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;