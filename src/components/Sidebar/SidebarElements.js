import styled from "styled-components";

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
flex-direction: column;
`;
