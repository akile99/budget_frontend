import React from 'react';
// import UpcomingBills from '../UpcomingBills/UpcomingBills.js';
import AccountList from '../Accounts/AccountList.js';

const SideBar = (props) => {

	const handelLoadAccount = (account_id) => {
		props.onChange(account_id)
	}

	const handelNewAccountClick = () => {
		props.account()
	}

	const handelBillsClick = () => {
		props.bills()
	}

	return (
		<div >
			<h3>Actions</h3>
			<button onClick={handelBillsClick}>Bills</button>
			<button onClick={handelNewAccountClick}>New Account</button>
			<AccountList key={props.user_id} user_id={props.user_id} host={props.host} onChange={handelLoadAccount}/>
		</div>
	);
};

export default SideBar;