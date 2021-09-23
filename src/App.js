import React, { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import Register from './components/Register/Register.js';
import Navigation from './components/Navigation/Navigation.js';
import InvalidUser from './components/InvalidUser/InvalidUser.js';
// import Greeting from './components/Greeting/Greeting.js';
// import Scroll from './components/Scroll/Scroll.js';

function App() {
	const host = 'https://star-ship-enterprise.herokuapp.com/';
	// const host = 'http://localhost:4567/'
	const [name, setName] = useState('')
	const [userid, setUserId] = useState('') 
	const [isRegistered, setIsRegistered] = useState(true)
	const [isSignedIn, setIsSignedIn] = useState(false)

	const handleSignIn = (user_id, firstname) => {
		if (user_id !== -1) {
			setName(firstname)
			setUserId(user_id)
			setIsSignedIn(true)
		}
		else {
			setUserId(-1)
		}
	}

	const handleSignOut = () => {
		setIsSignedIn(false)
		setUserId(0)
	}

	const handleRegistered = () => {
		setIsRegistered(!isRegistered)
	}

  return (
  	<div className="App">

  		{ !isSignedIn
  			?	<div>
  				{ !isRegistered
  					? <Register host={host} onChange={handleSignIn} onRegisterChange={handleRegistered}/>
  					: <div>
	  					{ userid === -1
	  						? <InvalidUser onRouteChange={handleSignOut}/>
	  						: <SignIn host={host} onChange={handleSignIn} onRegisterChange={handleRegistered} /> 
	 					}
 					</div>
 				}
 				</div>
  			:
  				<div>
	  			    <div className="pa4">
						<Navigation isSignedIn={isSignedIn} onRouteChange={handleSignOut} />
					</div>
					<div>
						<LandingPage host={host} user_id={userid} name={name}/>
					</div>					
				</div>
  		}

    </div>
  );
}

export default App
