import styled from "styled-components";

export const Header = styled.header`
display: flex;
position: relative;
z-index: 100;
width: 100vw;
background-color: var(--HeaderBackground);
height: 125px;

`;

export const Img = styled.img`
object-fit: scale-down;
width: 300px;
padding: 10px 0px 0px 10px;

`;

export const Nav = styled.nav`
position: absolute;
display: flex;
justify-content: space-between;
width: 550px;
right: calc((100vw - 550px) / 2);
top: calc((125px - 22px)/2);
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
@media screen and (max-width: 990px) {
	display: none;
`;
