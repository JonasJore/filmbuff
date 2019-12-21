import React, { useState } from 'react';

interface SearchFormPropTypes {
  searchTitle: (searchValue: string) => void;
}

export const SearchForm = ({ searchTitle }: SearchFormPropTypes): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');

  const resetSearch = () => {
    setSearchValue('');
  }

  const handleChange = (event: any): void => {
    setSearchValue(event.target.value);
  }

  const search = (event: any): void => {
    event.preventDefault();
    searchTitle(searchValue);
    resetSearch();
  }

  return (
    <div>
      <form className="searchForm" onSubmit={search}>
        <input
          className="searchFormInput"
          value={searchValue}
          onChange={handleChange}
          type='text'
        />
        <input className="searchButton" 
          onClick={() => searchTitle} 
          type="submit" 
          value="Search" 
        />
      </form>
    </div>
  );
}