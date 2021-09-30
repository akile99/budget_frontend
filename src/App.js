import React, { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn.js';
// import LandingPage from './components/LandingPage/LandingPage.js';
import Register from './components/Register/Register.js';
import InvalidUser from './components/InvalidUser/InvalidUser.js';
import Navigation from './components/Navigation/Navigation.js'
import AccountHeading from './components/AccountHeading/AccountHeading.js';
import Scroll from './components/Scroll/Scroll.js';
import SideBar from './components/SideBar/SideBar.js';
import CardList from './components/Transactions/CardList.js';

function App() {
	const host = 'https://star-ship-enterprise.herokuapp.com/';
	// const host = 'http://localhost:4567/'
	const [name, setName] = useState('')
	const [userid, setUserId] = useState('') 
	const [isRegistered, setIsRegistered] = useState(true)
	const [isSignedIn, setIsSignedIn] = useState(false)
	// const [account_id, setAccountId] = useState(false)
	const [account_id, setAccountid] = useState();
	const [sideBarOpen, setSideBarOpen] = useState(true)
	const [submit, setSubmit] = useState(false);
	const d = new Date()
	d.setDate(d.getDate() - 60)
	const [from_date, setFrom_Date] = useState(d.toISOString().split('T')[0])
	const [to_date, setTo_Date] = useState(new Date().toISOString().split('T')[0])

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

	const handelLoadAccount = (account_id) => {
		setAccountid(account_id)
		// handelBillChange()
	}

	const handleInputChange = () => {
		setSubmit(!submit)
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
  					<div style={{display: 'flex', justifyContent: 'flex-end'}}>
						{ !account_id
							? <AccountHeading 
					    	host={host}
					    	account_id={account_id} />
					    	: <p></p>
					 	}	
						<Navigation
							isSignedIn={isSignedIn} 
							name={name}
							onRouteChange={handleSignOut} 
						/>
					</div>
					<div style={{display: 'flex'}}>
					{ sideBarOpen
					? <div className="outline w-25 pa2 mr2 ml2">
						<Scroll>
					  		<SideBar key={userid} 
					  		user_id={userid} host={host} 
					  		onChange={handelLoadAccount} 
					  		// account={handelNewAccount} 
					  		// bills={handelBillChange}
					  		/>
						</Scroll>
					</div>
					: <div>
					</div>
					}
					<Scroll>
						<CardList key={account_id} 
						account_id={account_id} 
						host={host} 
						submit={submit} 
						onChange={handleInputChange} 
						from_date={from_date} 
						to_date={to_date}/>
					</Scroll>
					</div>
					{/*
					<LandingPage
						host={host} 
						user_id={userid}
						account_id={account_id}
						isSignedIn={isSignedIn} 
						name={name}
						handleSignIn={handleSignOut} />					
					*/}

				</div>
  		}

    </div>
  );
}

export default App;
