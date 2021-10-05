import React, { useState, useEffect } from 'react';
import './AccountHeading.css'

const AccountHeading = (props) => {
	const [pendingBalance, setPendingBalance] = useState(0)
	const [balance, setBalance] = useState(0)
	const [open_balance, setOpenBalance] = useState(0)
	const [balanceColor, setBalanceColor] = useState('black')
	const [pendingColor, setPendingColor] = useState('black')
	
	useEffect(() => {
		if (props.account_id) {
			try {
				// fetch(`${props.host}openningbalance`, {
				// 	method: 'post',
				// 	headers: {'Content-Type': 'application/json'},
				// 	body: JSON.stringify({
				// 		"account_id": props.account_id
				// 	})
				// })
				// 	.then(response => response.json())
				// 	.then(data => setOpenBalance(data[0].openningbalance));

				fetch(`${props.host}sumCleared`, {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					  "account_id": props.account_id
					})
				})
					.then(response => response.json())
			      	.then(data => setBalance(data[0].sum));

			    fetch(`${props.host}sumPending`, {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					  "account_id": props.account_id
					})
				})
					.then(response => response.json())
			      	.then(data => {setPendingBalance((Math.round(data[0].sum * 100) / 100).toFixed(2))});

			} catch (error) {
				console.error(error)
			} 		
			if (balance < 0) {
				setBalanceColor('red')
			}else {setBalanceColor('black')}

			if (pendingBalance < 0) {
				setPendingColor('red') 
			}else {setPendingColor('black')}
			// console.log(+open_balance + +balance)
		}

	},[props.account_id, pendingBalance, balance, props.host, props.submit])	

	return (
	
		<div className='heading'>
			  	<p className={balanceColor}>{`Actual $ ${((Math.round(balance) * 100) / 100).toFixed(2)}`} </p>	
			  	<p className={pendingColor}>{`$ ${((Math.round(pendingBalance) * 100) / 100).toFixed(2)}`} </p>
		</div>	
	);
}

export default AccountHeading;
















