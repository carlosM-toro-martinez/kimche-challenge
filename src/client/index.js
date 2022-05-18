import React from "react";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {Container, Row} from 'react-bootstrap';


export const clientUri = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});


function Client (props){

  return (
    <Container>
      <Row>
        {props.children}
      </Row>
    </Container>
  );

}
export {Client}



