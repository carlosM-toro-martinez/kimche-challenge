import React from 'react';
import { useCards } from './useLocalStorage';
import { gql} from "@apollo/client";

const ALL_COUNTRIES = gql`
  query allCountries {countries{
    code
    name
    native
    capital
    continent{
      name
    }
    languages{
      name
    }
    emoji
    }
  }
  `;

const CountriesContext = React.createContext();

function CountriesProvider(props) {
  const {
    data,
    loading,
    error
  } = useCards(ALL_COUNTRIES);
  const [searchValue, setSearchValue] = React.useState('');
  const [buttonActive, changeActive] = React.useState('lenguaje');
  console.log(typeof data)

  

  let searchedCards = [];

    if(!loading){
      if (!searchValue.length >= 1) {
        searchedCards = data.countries;
      } else {
        searchedCards = data.countries.filter(countries => {
          
          const cardText = countries.name.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return cardText.includes(searchText);
    
        });
      }
    }

    console.log(typeof searchedCards)

  
  return (
    <CountriesContext.Provider value={{
      searchValue,
      setSearchValue,
      searchedCards,
      loading,
      error,
      buttonActive,
       changeActive,
    }}>
      {props.children}
    </CountriesContext.Provider>
  );
}

export { CountriesContext, CountriesProvider };
