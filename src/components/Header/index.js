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
	{/* <h1>Tapestry Massage Therapy</h1> */}
	
	{/* <div style={{textAlign:"center"}}> 
		<h1 style={{color:"white"}}>
			Geeks For Geeks
		</h1>

		<div class="container">
			<svg viewBox="0 0 500 500"
				preserveAspectRatio="xMinYMin meet"
				style={{zIndex: "-2"}}>
			
			<path d="M0, 50 C160, 150 300,
				0 500, 100 L500, 00 L0, 0 Z"
				style={{stroke: "none",fill:"rgba(247, 214, 172, 0.838)"}}>
			</path>
			</svg>
		</div>
	
		<div class="container">
			<svg viewBox="0 0 500 500"
				preserveAspectRatio="xMinYMin meet"
				style={{zIndex: "-1"}}>
				
				<path d="M0, 75 C300, 0 400,
					200 500, 50 L500, 00 L0, 0 Z"
					style={{stroke: "none", fill: "rgba(126, 193, 107, .75)"}}>
				</path>
			</svg>
		</div>
	
		<div class="container">
			<svg viewBox="0 0 500 500"
				preserveAspectRatio="xMinYMin meet"
				style={{zIndex: "-3"}}>
				
				<path d="M0, 100 C150, 200 350,
					0 500, 100 L500, 00 L0, 0 Z"
					style={{stroke: "none", fill:"rgba(185, 222, 175, 0.715)"}}>
				</path>
			</svg>
		</div>
	</div> */}

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
