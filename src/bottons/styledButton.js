import styled from "styled-components";

export const Contenedor = styled.div`
    margin: 10px;
    text-align: center;
    width: 100%;

`;
export const ButtonStyled = styled.button`
    background: #A3A2A2;
    border-bottom: 5px solid #404040;
    border-radius: 12px;
    box-shadow: 6px 6px 6px #999;
    color: #000;
    cursor: pointer; 
    font-family: 'Raleway', Arial, Helvetica;
    text-align: center;
    transition: all 0.2s ease 0s;
    margin: 10px;
    width: 20%;
    height: 55px;
    text-align: center;
    text-size-adjust: calc();
    font-weight: bold;
    &:focus {
    //box-shadow: 0 0 0 2px white, 0 0 0 4px #0F0F0F;
    background-color: #3C3C3C;
    color: #fff;
    border-bottom: 5px solid #1E1E1E;
}

`;