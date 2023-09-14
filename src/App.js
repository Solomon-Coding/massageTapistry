import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
import SideBar from './components/Sidebar';
import About from './components/pages/About/index';
import Home from './components/pages/Home/index';
import ContactMe from './components/pages/Contact/index';
import Faq from './components/pages/FAQ/index';


function App() {
return (
	<Router>
		<HeaderComponent/>
		<SideBar/>
		<Routes>
			<Route exact path='/' element={<Home/>} />
			<Route path='/home' element={<Home/>} />
			<Route path='/about' element={<About/>} />
			<Route path='/contact' element={<ContactMe/>} />
			<Route path='/faq' element={<Faq/>} />
		</Routes>
		
		{/* <FooterComponent/> */}

	</Router>
);
}

export default App;
