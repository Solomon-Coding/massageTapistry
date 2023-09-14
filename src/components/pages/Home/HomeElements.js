import styled from "styled-components";
import image from '../../../images/version1_3.jpg';

export const Main = styled.main`
    padding: 0px;
    opacity: 1;
    // background-image:  linear-gradient(#595555 .5px, transparent .5px), 
    //     linear-gradient(to right, #6d6969 .5px, transparent .5px);
    background-size: 4px 4px;
`;

export const Div = styled.div`
    display: flex;
    background-image: url(${image});
    height: 100vh;
    width: 100vw;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    width: 100px;
    height: 40px;
    background-color: var(--ThemeColor3);
    border-radius: 5px;
    font-size: 15px;
    &:hover{
        cursor: pointer;
        background-color: var(--ThemeColor4); 
    }
`;

export const Div2 = styled.div`
    background-color: var(--ThemeColor1);
    width: 25%;
    // height: 20%;
    border-radius: 7.5%/15%;
    border: 2px solid var(--ThemeColor2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    font-weight: 500;
    padding-bottom: 13px;
`;

export const P = styled.p`
margin: 1em;
`;