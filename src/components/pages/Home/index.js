import React from 'react';
import {Div, Main, Button, Div2, P} from "./HomeElements";
import { Link } from 'react-router-dom';

const Home = () => {
		return (
			<Main>
				<Div>
					
					<Div2>
					<P>Welcome to Tapestry Massage Therapy</P>
						<Link to="/about">
						<Button> About Me</Button>
						</Link>
						
					</Div2>
				</Div>
			</Main>
		);
		};

export default Home;
