import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn.js';
// import LandingPage from './components/LandingPage/LandingPage.js';
import Register from './components/Register/Register.js';
import InvalidUser from './components/InvalidUser/InvalidUser.js';
import Navigation from './components/Navigation/Navigation.js'
import AccountHeading from './components/AccountHeading/AccountHeading.js';
import Scroll from './components/Scroll/Scroll.js';
import SideBar from './components/SideBar/SideBar.js';
import TransactionList from './components/Transactions/TransactionList.js';
import NewAccount from './components/NewAccount/NewAccount.js';
import UpcomingBills from './components/UpcomingBills/UpcomingBills.js';
// import InputTransaction from './components/InputTransaction/InputTransaction.js';


function App() {
	const host = 'https://star-ship-enterprise.herokuapp.com/';
	// const host = 'http://localhost:4567/'
	const [name, setName] = useState('')
	const [user_id, setuser_id] = useState('') 
	const [isRegistered, setIsRegistered] = useState(true)
	const [isSignedIn, setIsSignedIn] = useState(false)
	const [account_id, setAccountid] = useState();
	const [sideBarOpen, setSideBarOpen] = useState(true)
	const [submit, setSubmit] = useState(false);
	const d = new Date()
	d.setDate(d.getDate() - 60)
	const [from_date, setFrom_Date] = useState(d.toISOString().split('T')[0])
	const [to_date, setTo_Date] = useState(new Date().toISOString().split('T')[0])
	// const [insert, setInsert] = useState(false);
	const [createAccount, setCreateAccount] = useState(false)
	const [searchDate, setSearchDate] = useState(false)
	const [billsPage, setBillsPage] = useState(false)
	const [counter, setCounter] = useState(0)

	const onFrom_DateChange = (event) => {
		setFrom_Date(event.target.value)
	}

	const handleSearchDate = () => {
		setSearchDate(!searchDate);
	}

	const handleSignIn = (user_id, firstname) => {
		if (user_id !== -1) {
			setName(firstname)
			setuser_id(user_id)
			setIsSignedIn(true)
		}
		else {
			setuser_id(-1)
		}
	}

	const handleSignOut = () => {
		setIsSignedIn(false)
		setuser_id(0)
	}

	const handleRegistered = () => {
		setIsRegistered(!isRegistered)
	}

	const handleLoadAccount = (account_id) => {
		setAccountid(account_id)
		// handelBillChange()
	}

	const handleInputChange = () => {
		setSubmit(!submit)
	}

	const handelNewAccount = () => {
		setCreateAccount(!createAccount)
	}

	const handelSideBarOpenClose = () => {
		setSideBarOpen(!sideBarOpen)
	}

	const onTo_DateChange = (event) => {
		setTo_Date(event.target.value)
	}

	const handelBillChange = (account_id) => {
		setBillsPage(!billsPage)
	}



	return (
		<div className="App">
			{ !isSignedIn
				?	<div id = 'Register'>
					{ !isRegistered
						? <Register host={host} onChange={handleSignIn} onRegisterChange={handleRegistered}/>
						: <div>
	  					{ user_id === -1
	  						? <InvalidUser onRouteChange={handleSignOut}/>
	  						: <SignIn host={host} onChange={handleSignIn} onRegisterChange={handleRegistered} /> 
	 					}
						</div>
					}
					</div>
				: 	<div id = 'LandingPage'>
						<div id = 'Navigation'>
						{ account_id
							? <AccountHeading host={host} account_id={account_id} /> : <p></p>
					 	}	
						<Navigation isSignedIn={isSignedIn} name={name} onRouteChange={handleSignOut} />
					</div>
					<div id = "MainPage">
						<div id = 'Sidebar' className="outline ">
							{ sideBarOpen
							? <div >
								{ createAccount 
									? <div>
										<NewAccount host={host} user_id={user_id}/>
										<button onClick={handelNewAccount}>exit</button>
										</div>
									: <div></div>
								}
								<Scroll>
							  		<SideBar key={user_id} user_id={user_id} host={host} onChange={handleLoadAccount} account={handelNewAccount} bills={handelBillChange} />
								</Scroll>
							</div>
							: <div></div>
							}
						</div>
						<div id = 'Transaction'>
							{ !account_id
								? <Scroll> 
									<UpcomingBills key={user_id} host={host} user_id={user_id}/>
									</Scroll>
								:
								<Scroll>
									<TransactionList key={account_id} account_id={account_id} host={host} submit={submit} onChange={handleInputChange} from_date={from_date} to_date={to_date}/>
								</Scroll>
							}	
						</div>
					</div>
				</div>
			}
	</div>
	);
}

export default App;
