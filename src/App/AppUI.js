import React from 'react';
import { CountriesSearch } from '../CountriesSearch';
import {Client} from '../client'
import {Buttons} from '../bottons'
import { CountriesContext } from '../countriesContext';
import {Error} from '../CountriesError'
import {Loading} from '../Loading'
import {Lenguages} from '../lenguages'
import {Continent} from '../continents'
import {Card, Col} from 'react-bootstrap';


function AppUI() {
  const {
    searchValue,
    setSearchValue,
    searchedCards,
    loading,
    error,
    buttonActive,
    changeActive,

  } = React.useContext(CountriesContext);

  return (
    <React.Fragment>

      <CountriesSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue} />


      <Buttons changeActive={changeActive}/>


      <Client>
        {loading && <Loading />}
        {error && <Error />}

        {searchedCards.map(countries => (
          <Col md={6} lg={4} key={countries.code}>

              {buttonActive==="continente" && <Lenguages
                key = {countries.languages.name}
                code={countries.languages.name} 
                nombre={countries.continent.name}
              />}

              {buttonActive==="lenguaje" && <Continent 
                key={countries.languages.name} 
                nombre={countries.languages.map(languages => languages.name)}/>}

              <Card className="border-dark mb-3" bg="secondary" text={"dark" === 'light' ? 'dark' : 'white'}  style={{ width: '18rem' }}>
                <Card.Header className="d-flex justify-content-between" bg="secondary">
                  <p>{countries.emoji}</p>
                  <p>{countries.name}</p>
                </Card.Header>
                <Card.Body>
                  <Card.Text className="d-flex justify-content-between"> 
                    <p >NATIVE:</p>
                    <p >{countries.native}</p>
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between"> 
                    <p >CAPITAL:</p>
                    <p >{countries.capital}</p>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
        ))}
      </Client>
      
    </React.Fragment>
  );
}

export { AppUI };
