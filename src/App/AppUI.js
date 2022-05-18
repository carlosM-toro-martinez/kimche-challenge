import React from 'react';
import { CountriesSearch } from '../CountriesSearch';
import {Client} from '../client'
import {Buttons} from '../bottons'
import {Encabezado} from '../lenguages/styledLoading'

function Caja(){
  return (
    <Encabezado>
      Country Search
    </Encabezado>
  )
}

function AppUI() {
  return (
    <React.Fragment>
      <Caja/>
      <CountriesSearch />
      <Buttons/>
      <Client></Client>
      
    </React.Fragment>
  );
}

export { AppUI };
