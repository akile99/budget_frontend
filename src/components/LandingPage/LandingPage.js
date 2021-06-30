import React, { useState } from 'react';
import Greeting from '../Greeting/Greeting.js';
import SideBar from '../SideBar/SideBar.js';
import UpcomingBills from '../UpcomingBills/UpcomingBills.js';
import InputTransaction from '../InputTransaction/InputTransaction.js';
import Scroll from '../Scroll/Scroll.js';
// import InsertBill from '../UpcomingBills/InsertBill.js';
import CardList from '../Transactions/CardList.js';
// import AccountList from '../Accounts/AccountList.js';
import NewAccount from '../NewAccount/NewAccount.js';

const LandingPage = (props) => {
	const [submit, setSubmit] = useState(false);
	const [insert, setInsert] = useState(false);
	// const [insertNewBill, setinsertNewBill] = useState(false);
	const [account_id, setAccountid] = useState();
	const [createAccount, setCreateAccount] = useState(false)
	const [sideBarOpen, setSideBarOpen] = useState(false)
	const [billsPage, setBillsPage] = useState(true)
	const [from_date, setFrom_Date] = useState('')
	const [to_date, setTo_Date] = useState('')


	const handleInputChange = () => {
		setSubmit(!submit)
	}

	const handleInsertChange = () => {
		setInsert(!insert);
	}

	const handelLoadAccount = (account_id) => {
		setAccountid(account_id)
		handelBillChange()
	}

	const handelBillChange = (account_id) => {
		setBillsPage(!billsPage)
	}

	const handelNewAccount = () => {
		setCreateAccount(!createAccount)
	}

	const handelSideBarOpenClose = () => {
		setSideBarOpen(!sideBarOpen)
	}

	const onFrom_DateChange = (event) => {
		setFrom_Date(event.target.value)
	}

	const onTo_DateChange = (event) => {
		setTo_Date(event.target.value)
	}

	return (
		<div>
			<Greeting name={props.name} host={props.host} account_id={account_id} submit={submit} />
			{ createAccount 
				? <div>
					<NewAccount host={props.host} user_id={props.user_id}/>
					<button onClick={handelNewAccount}>exit</button>
					</div>
				: <div></div>
			}
			<button onClick={handelSideBarOpenClose}>Side Bar</button>
			<div className="flex flex-row no-wrap center">
				{ sideBarOpen
				? <div className="outline w-25 pa2 mr2 ml2">
					<Scroll>
				  		<SideBar key={props.user_id} user_id={props.user_id} host={props.host} onChange={handelLoadAccount} account={handelNewAccount} bills={handelBillChange}/>
					</Scroll>
				</div>
				: <div>
				</div>
				}

				<div className="outline w-90 pa1 mr1">
				  	<div>
						{ insert === true 
				  		?	
					  		<div>
						      	<InputTransaction account_id={account_id} host={props.host} submit={submit} onChange={handleInputChange} />
								<button onClick={handleInsertChange}> Exit </button>
							</div>
						:
							<button onClick={handleInsertChange}> Insert </button>
						}
					<input 
						className= 'f4 pa2 w-25 center' 
						type='date' 
						id='from_date'
						name='from_dateate'
						value={from_date}
						onChange={onFrom_DateChange}
					/>
					<input 
						className= 'f4 pa2 w-25 center' 
						type='date' 
						id='to_date'
						name='to_date'
						value={to_date}
						onChange={onTo_DateChange}
					/>
					</div>
					{ billsPage
						? <Scroll> 
							<UpcomingBills key={props.user_id} host={props.host} user_id={props.user_id}/>
							</Scroll>
						:
						<Scroll>
							<CardList key={account_id} account_id={account_id} host={props.host} submit={submit} onChange={handleInputChange} />
						</Scroll>
					}

				</div>

			</div>
		</div>
	);
}

export default LandingPage;