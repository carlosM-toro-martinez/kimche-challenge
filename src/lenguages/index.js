import React from "react";
import {TextGroupBy} from '../continents/styledContinent'


function Lenguages(props){
    return(
        <TextGroupBy key={props.key}>{props.nombre}</TextGroupBy>
        
    );
}
export {Lenguages}