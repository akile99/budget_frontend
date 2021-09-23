import React, { useState, useEffect } from 'react';
import './Greeting.css'

const Greeting = (props) => {
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


		// if (pendingSum === null) {
		// 	setPendingSum(0) 
		// }

		// if (sum === null) {
		// 	setSum("Loading") 
		// }

	},[props.account_id, props.submit, pendingSum, sum, props.host])	

	return (
		<div>
		  <h1 className='f3'>
		    {`${props.name}, your account ballance is ...`}
		  </h1>
		  { !props.account_id
		  	? <h4>Chose an action</h4>
		  	: 
		  	<div>
			  	<p className={pendingColor}>{`Pending $ ${pendingSum}`} </p>
			  	<p className={sumColor}>{`Actual $ ${sum}`} </p>
			</div>
		  }

		</div>
	);
}

export default Greeting;
















