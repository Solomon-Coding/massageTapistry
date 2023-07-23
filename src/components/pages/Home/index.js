import React from 'react';
import {Div, Main, Img} from "./HomeElements";
import Banner from "../../../images/deep-forest-relaxation-2.jpg";

const Home = () => {
		return (
			<Main>
				{/* <h1>My Projects</h1> */}
				{/* <br/> */}
				<Div>
					<Img src={Banner}></Img>
				</Div>
				
				{/* <Box>
welcome
				</Box> */}
			</Main>
		);
		};

export default Home;
