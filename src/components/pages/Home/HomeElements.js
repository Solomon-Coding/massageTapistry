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
object-fit: scale-down;
height: 700px;
z-index: 0;
background-image: url(${image});
`;

export const Div2 = styled.div`
filter: brightness(.75);
// object-fit: scale-down;
height: 700px;
background-image: url(${image});
`;