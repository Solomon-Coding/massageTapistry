import React from "react";
import { NavLink} from "./NavbarElements";


const Navbar = () => {
return (
	<>
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
	</>
	);
};

export default Navbar;