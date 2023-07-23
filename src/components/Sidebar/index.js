import React from "react";
import { slide as Menu } from "react-burger-menu";
import Navbar from "../Navbar";
import { NavMenu, Nav } from "./SidebarElements";



const Sidebar = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return (
    <>
    <Menu isOpen={isMenuOpen} onStateChange={handleStateChange} right {...Sidebar}>
      <Nav>
        <NavMenu>
          <Navbar>
            
          </Navbar>
        </NavMenu>
      </Nav>
      
      
      {/* <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About Me
      </a>

      <a className="menu-item" href="/contact">
        Contact Me
      </a>

      <a className="menu-item" href="/faq">
        FAQ
      </a> */}
    </Menu>
    </>
  );
};

export default Sidebar;