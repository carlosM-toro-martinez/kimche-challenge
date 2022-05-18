import React from 'react';
import './CountriesSearch.css';
import {Encabezado} from './styledP';

function CountriesSearch(props) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    props.setSearchValue(event.target.value);
  };

  return (
    <><Encabezado>
      Country Search
    </Encabezado>
    
    <input
        className="CountriesSearch"
        placeholder="SEARCH COUNTRIES"
        value={props.searchValue}
        onChange={onSearchValueChange} /></>
  );
}

export { CountriesSearch };
