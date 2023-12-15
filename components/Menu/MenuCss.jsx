import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: black;
    position: fixed;
    display: flex;
    flex-direction: space-around;
`

export const ContainerLogo = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.h2`
    font-size: 22pt;
    font-family: sans-serif;
    color: white;

`


export const Lista = styled.ul`
    width: 50%;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
`

export const Link = styled.a`
    text-decoration: none;
    color: white;
    font-size: 14pt;

`

export const ContainerContato = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: center;
`

export const Imagens = styled.img`
    width: 30px;
    heigth: 30px;
    color: white;
    z-index: 5;
`
export const ImagensLink = styled.a`
    text-decoration: none;
`