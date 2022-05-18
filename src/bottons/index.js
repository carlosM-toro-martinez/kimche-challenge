import React from 'react';
import { CountriesContext } from '../countriesContext';
import {Contenedor, ButtonStyled} from './styledButton'
import {Encabezado } from '../lenguages/styledLoading'




function Buttons(){
  const { changeActive } = React.useContext(CountriesContext);

    const clickk = (tipo) => {
        changeActive(tipo);
    }
    
    return (
        <Contenedor>
            <Encabezado>Group By:</Encabezado>
            <ButtonStyled  onClick={()=>clickk("continente")}>Continent</ButtonStyled>
            <ButtonStyled  onClick={()=>clickk("lenguaje")}>Lenguages</ButtonStyled>
        </Contenedor>
    );
}
export {Buttons}