import styled from "styled-components";

export const Header = styled.header`
display: flex;
position: fixed;
z-index: 100;
background-color: var(--FooterBackground);
width: 100vw;
`;

export const Img = styled.img`
object-fit: scale-down;
width: 300px;
padding: 10px 0px 0px 10px;
`;

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
@media screen and (max-width: 990px) {
	display: none;
`;
