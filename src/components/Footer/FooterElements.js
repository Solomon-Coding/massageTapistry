import styled from "styled-components";

export const Footer = styled.footer`
display: flex;
position: relative;
z-index: 100;
width: 100vw;
background-color: var(--FooterBackground);
height: 85px;
justify-content: space-evenly;
padding: 0.2rem;
bottom: 0px;


`;

export const Img = styled.img`
display: flex;
filter: invert(80%) sepia(24%) saturate(469%) hue-rotate(345deg) brightness(88%) contrast(91%);
width: 80%;
height: 80%;
align-items: center;
margin-right: -24px;	
white-space: nowrap;
&:hover {
	filter: invert(85%) sepia(17%) saturate(1118%) hue-rotate(324deg) brightness(101%) contrast(103%);
	// width:85%;
	// height:85%;
}
`;