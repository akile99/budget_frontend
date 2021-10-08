import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import InvalidUser from './components/InvalidUser/InvalidUser.js';
import Navigation from './components/Navigation/Navigation.js'
import AccountBalance from './components/AccountBalance/AccountBalance.js';
import AccountPending from './components/AccountBalance/AccountPending.js';
import Scroll from './components/Scroll/Scroll.js';
import SideBar from './components/SideBar/SideBar.js';
import TransactionList from './components/Transactions/TransactionList.js';
import NewAccount from './components/NewAccount/NewAccount.js';
import UpcomingBills from './components/UpcomingBills/UpcomingBills.js';
import InputTransaction from './components/InputTransaction/InputTransaction.js';
import useOpenningBalances from './Hooks/useOpenningBalances.js';
import useLocalStorage from './Hooks/useLocalStorage.js';
import useSessionStorage from './Hooks/useSessionStorage.js';

function App() {
	const host = 'https://star-ship-enterprise.herokuapp.com/';
	const [name, setName] = useSessionStorage('name', '') 
	const [user_id, setuser_id] = useSessionStorage('user_id', '') 
	const [isSignedIn, setIsSignedIn] = useSessionStorage('isSignedIn', false)
	const [isRegistered, setIsRegistered] = useState(true)
	const [account_id, setAccountid] = useSessionStorage('account_id', '') 
	const [sideBarOpen, setSideBarOpen] = useState(true);
	const [submit, setSubmit] = useState(false);
	const d = new Date()
	d.setDate(d.getDate() - 60)
	const [from_date, setFrom_Date] = useState(d.toISOString().split('T')[0])
	const [to_date, setTo_Date] = useState(new Date().toISOString().split('T')[0])
	const [createAccount, setCreateAccount] = useState(false)
	const [searchDate, setSearchDate] = useState(false)
	const [billsPage, setBillsPage] = useState(false)
	const [insert, setInsert] = useState(false)

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
		setuser_id()
		setAccountid()
		setName()		
		localStorage.clear()
	}

	const handleRegistered = () => {
		setIsRegistered(!isRegistered)
	}

	const handleLoadAccount = (account_id) => {
		setAccountid(account_id)
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

	const handleInsertChange = () => {
		setInsert(!insert);
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
					<nav>
					{account_id 
						? <div>
							<p className ='links' onClick={handleInsertChange}>Add Transaction</p> 
						  </div>
						:<p></p>
					}
						
						<div className='Navigation'>
							{ account_id
								? <div className='Navigation'>
									<p>Actual</p>
									<AccountBalance className='f3' host={host} account_id={account_id} submit={submit}/> 
									<AccountPending className='f3' host={host} account_id={account_id} submit={submit}/> 
						 		  </div>
						 		: <p></p>
						 	}	
							<Navigation isSignedIn={isSignedIn} name={name} onRouteChange={handleSignOut} />
						</div>
					</nav>
					{ insert
					? <div id='insertTransaction'>
				      	<InputTransaction account_id={account_id} host={host} submit={submit} onChange={handleInputChange} />
					  </div>
					: <div></div>
					}
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
							  		<SideBar key={user_id} user_id={user_id} host={host} onChange={handleLoadAccount} account={handelNewAccount} bills={handelBillChange} submit={submit} />
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
