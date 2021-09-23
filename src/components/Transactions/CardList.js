import React, { useState, useEffect } from 'react';
import Card from './Card.js'

const CardList = (props) => {
	// const [accountid, setAccountid] = useState(1);
	const [transactions, setTransactions] = useState([]);
	// const d = new Date();
	// d.setDate(d.getDate() - 60);
	//const from_date = d.toLocaleString();


	const updateTransactions = (value) => {
		props.onChange()
	}

	useEffect(() => {
		fetch(`${props.host}transactions`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "account_id": props.account_id,
			  "from_date": props.from_date,
			  "to_date": props.to_date
			})
		})
		.then(response => response.json())
      	.then(data => {setTransactions(data)});
	},[props.submit, props.account_id, props.host, props.from_date, props.to_date])

	return (
		<div>
			<div className="flex justify-center">
				<h3 className="fl w-10 pa1 tc">Date</h3> 
				<h3 className="fl w-30 pa1 tc">Vender</h3> 
				<h3 className="fl w-20 pa1 tc">Amount</h3> 
				<h3 className="fl w-10 pa1 tc">Status</h3> 
				<h3 className="fl w-30 pa1 tc">Category</h3>
				<h3 className="fl w-10 pa1 tc">remove</h3>
			</div>
			{
			transactions.map((data, i) => {
				return (
					<Card 
					key={transactions[i].transaction_id}
					transaction_id={transactions[i].transaction_id} 
					accountid={transactions[i].accountid}
					date = {transactions[i].date}
					vendor={transactions[i].vendor}
					amount={(Math.round(transactions[i].amount * 100) / 100).toFixed(2)}
					status={transactions[i].status}
					category={transactions[i].category}
					host={props.host}
					onChange={updateTransactions}
					submit={props.submit}
					/>
				);
			})
			}
		</div>
		);
}

export default CardList;