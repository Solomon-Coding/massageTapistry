import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";


const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/home" activeStyle>
			Home
		</NavLink>
		<NavLink to="/about" activeStyle>
			About Me
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Me
		</NavLink>
		<NavLink to="/faq" activeStyle>
			FAQ
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
