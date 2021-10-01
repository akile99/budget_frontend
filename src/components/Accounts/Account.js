import React from 'react';
// import Search from '../Search/Search.js'

// const getStingDate = require('./Functions/getStingDate');

const Card = (props) => {
	const { account_id, account_name, account_type } = props;

	const handelLoadAccount = () => {
		props.onChange(account_id)
	}

	return (
		<div className="flex">
			<p 
				className="fl w-30 tc tc bg-white "
				onClick={() => handelLoadAccount()}
			>{account_name + " " + account_type}		
			{/*>{account_name + " " + account_type + " $ " + sum}*/}
			</p>
		</div>

		);



}

export default Card;