import React, { useState } from 'react';
import useBalance from '../../Hooks/useBalance.js';
import './AccountBalance.css';

const AccountBalance = (props) => {
	const address = 'sumCleared';
	const [balance, balanceColor] = useBalance(
		props.account_id, props.host, address, props.submit);
	// const [balanceColor, setBalanceColor] = useState('black')

	return (
	  	<p className={balanceColor}>{`$ ${((Math.round(balance) * 100) / 100).toFixed(2)}`} </p>	
	);
}

export default AccountBalance;
















