import React from "react";
import { slide as Menu } from "react-burger-menu";
import Navbar from "../Navbar";
import { NavMenu, Nav } from "./SidebarElements";



const Sidebar = () => {

  return (
    <>
    <Menu right {...Sidebar}>
      <Nav>
        <NavMenu>
          <Navbar>
            
          </Navbar>
        </NavMenu>
      </Nav>
    </Menu>
    </>
  );
};

export default Sidebar;