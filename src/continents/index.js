import React from "react";
import {TextGroupBy} from "./styledContinent"

function Continent(props){
    return(
        <TextGroupBy key={props.key}>{props.nombre}</TextGroupBy>
    );
}
export {Continent}