import React from 'react';
import './AccountBalance.css'

const AccountPending = (props) => {

	return (
	  	<p className={props.color}>{`$ ${props.balance}`} </p>
	);
}

export default AccountPending;
















