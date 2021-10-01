import React from 'react';
import './Account.css';
// import Search from '../Search/Search.js'

// const getStingDate = require('./Functions/getStingDate');

const Card = (props) => {
	const { account_id, account_name, account_type } = props;

	const handelLoadAccount = () => {
		props.onChange(account_id)
	}

	return (
		<div id = "Accounts" onClick={() => handelLoadAccount()}>
			<p className="Account">
			   {account_name + " " + account_type}</p>
			<p className="Account">$ 199999.00</p>
		</div>

		);



}

export default Card;