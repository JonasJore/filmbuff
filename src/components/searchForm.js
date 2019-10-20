import React, { useState } from 'react';

export const SearchForm = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const resetSearch = () => {
    setSearchValue('');
  }

  const handleChange = (even) => {
    setSearchValue(event.target.value);
  }

  const search = (event) => {
    event.preventDefault();
    props.searchValue(searchValue);
    resetSearch();
  }

  return (
    <div>
      <form className="searchForm">
        <input
          className="searchFormInput"
          value={searchValue}
          onChange={handleChange}
          type='text'
        />
      </form>
      <input className="searchButton" onClick={search} type="submit" value="Search" />
    </div>
  );
}