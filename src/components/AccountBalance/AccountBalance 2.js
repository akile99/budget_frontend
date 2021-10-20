import React from 'react';
import './AccountBalance.css';

const AccountBalance = (props) => {

	return (
	  	<p className={props.balanceColor}>{`$ ${props.balance}`} </p>	
	);
}

export default AccountBalance;
















