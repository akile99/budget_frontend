import React from 'react';
import './navigation.css';
// import Greeting from '../Greeting/Greeting.js';

const Navigation = ({ onRouteChange, isSignedIn, name}) => {
	if(isSignedIn) {
		return (
			<nav className='navigation'>
				<p className='f3'>{name}</p>
				<p onClick={() => onRouteChange('signout')} 
				className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} 
				className='f3 link dim black underline pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('register')} 
				className='f3 link dim black underline pa3 pointer'>Register</p>
			</nav>
		);
	}
}

export default Navigation;