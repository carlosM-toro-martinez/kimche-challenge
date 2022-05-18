import React from "react";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {Card, Container, Col, Row} from 'react-bootstrap';
import { CountriesContext } from '../countriesContext';
import {Error} from '../CountriesError'
import {Loading} from '../Loading'
import {Lenguages} from '../lenguages'
import {Continent} from '../continents'




export const clientUri = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});


function Client (){ 
  const {
    searchedCards,
    loading,
    error,
    buttonActive,

  } = React.useContext(CountriesContext);
  if(loading){
    return <Loading/>;
  }  
  if(error){
    return <Error/>;
  }


  return (
    <Container>
      {error && <Error/> }
      
      <Row>
      {searchedCards.map(countries => (
        <Col md={6} lg={4} key={countries.code}>
            {buttonActive==="continente" && <Lenguages style={{textAlign: "center"}} 
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
      </Row>
    </Container>
  );

}
export {Client}



