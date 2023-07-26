import styled from "styled-components";
import image from "../../../images/deep-forest-relaxation-2.jpg";

export const Main = styled.main`
background-color: var(--PagesBackground);
width:100vw;
`;

export const Div = styled.div`
display: flex;
justify-content: center;
padding: 5%;
`;

export const Img = styled.img`
filter: brightness(.75);
height: 700px;
z-index: 0;
background-image: url(${image});
`;

export const Div2 = styled.div`
// Ratio 16:9
filter: brightness(.75);
height: 700px;
width: calc(( 700px / 9) * 16);
background-image: url(${image});
display: flex;
justify-content: center;
align-items: center;
`;