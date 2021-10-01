import React, { useState, useEffect } from 'react';
import './AccountHeading.css'

const AccountHeading = (props) => {
	const [pendingSum, setPendingSum] = useState(0)
	const [sum, setSum] = useState(0)
	const [sumColor, setSumColor] = useState('black')
	const [pendingColor, setPendingColor] = useState('black')
	
	useEffect(() => {
		if (props.account_id) {
			try {
				fetch(`${props.host}sumCleared`, {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					  "account_id": props.account_id
					})
				})
					.then(response => response.json())
			      	.then(data => setSum((Math.round(data[0].sum * 100) / 100).toFixed(2)));
					
			    fetch(`${props.host}sumPending`, {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					  "account_id": props.account_id
					})
				})
					.then(response => response.json())
			      	.then(data => {setPendingSum((Math.round(data[0].sum * 100) / 100).toFixed(2))});

			} catch (error) {
				console.error(error)
			} 		
			if (sum < 0 && sum) {
				setSumColor('red')
			}

			if (pendingSum < 0) {
				setPendingColor('red') 
			}
		}

	//Testing


	},[props.account_id, pendingSum, sum, props.host])	

	return (
		<div style={{display: 'flex', justifyContent: 'flex-end'}}>
		  	<p className='f3 black pa3 {sumColor}'>{`Actual $ ${sum}`} </p>		
		  	<p className='f3 black pa3 {pendingColor}'>{`$ ${pendingSum}`} </p>
		</div>
	);
}

export default AccountHeading;
















