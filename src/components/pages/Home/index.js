import React from 'react';
import {Div, Main, Div2, Img} from "./HomeElements";
import Banner from "../../../images/deep-forest-relaxation-2.jpg";
// import Carousel from "../../Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
		return (
			<Main >
				{/* <Carousel /> */}
				<Div>
					<Div2 >
						<p className='weave'>
						Welcome 
						</p>
						
					</Div2>
				</Div>
				<div>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</Main>
		);
	};

export default Home;


// const Home = () => {
// 	return (
// 		<Main >
// 			<Div>
// 				{/* <Img src={Banner}></Img> */}
				
// 			</Div>
// 		</Main>
// 	);
// 	};

// export default Home;