import React, { useState } from 'react';

export const SearchForm = props => {
  const [searchKeyword, setSearchKeyWord] = useState('');

  const handleSearchWord = e => {
    setSearchKeyWord(e.target.value);
  };

  const resetSearchWord = () => {
    setSearchKeyWord('');
  };

  const callSearchValue = (e) => {
    e.preventDefault();
    props.search(searchKeyword);
    resetSearchWord();
  };

  return (
    <form className="search">
      <input 
        value={searchKeyword}
        onChange={handleSearchWord}
        type="text" />
      <input 
        onClick={callSearchValue} 
        type="submit" 
        value="Search" />
    </form>
  );

}