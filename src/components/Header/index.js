import React from "react";
import { Header, Img, Nav, NavMenu}
	from "./HeaderElements";
import Navbar from "../Navbar";
import logo from "../../images/word_mark_lockup-07.png";

const HeaderComponent = () => {
return (
	<>
	<Header>
		<Img src={logo} alt="Tapestry Logo"></Img>

		<Nav>
        	<NavMenu>
         		<Navbar/>
        	</NavMenu>
      	</Nav>
	</Header>
	</>
);
};

export default HeaderComponent;
