import React from 'react';
import {Contenedor, ButtonStyled} from './styledButton'
import {Encabezado } from '../CountriesSearch/styledP'

function Buttons(props){

    const clickk = (tipo) => {
        props.changeActive(tipo);
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