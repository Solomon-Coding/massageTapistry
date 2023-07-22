import styled from "styled-components";

export const Header = styled.header`
display: flex;
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
