import React from 'react';
import { CountriesContext } from '../countriesContext';
import './CountriesSearch.css';

function CountriesSearch() {
  const { searchValue, setSearchValue } = React.useContext(CountriesContext);
  
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="CountriesSearch"
      placeholder="SEARCH COUNTRIES"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { CountriesSearch };
