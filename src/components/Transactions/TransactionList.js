import React, { useState, useEffect } from 'react';
import Transaction from './Transaction.js';
import './Transaction.css';

const TransactionList = (props) => {
	const [transactions, setTransactions] = useState([]);

	const updateTransactions = (value) => {
		props.onChange()
	}
	useEffect(() => {
		try{
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
      }
      catch (e) {
      	console.log(e)
      }
      console.log(props.account_id)

	},[props.submit, props.account_id, props.host, props.from_date, props.to_date])

	return (
		<div className='grid'>
			<div className="outline flex justify-left">
				<h3 className="date transaction">Date</h3> 
				<h3 className="vendor transaction">Vender</h3> 
				<h3 className="amount transaction">Amount</h3> 
				<h3 className="status transaction">Status</h3> 
				<h3 className="category transaction">Category</h3>
				<h3 className="edit transaction">Edit</h3>
			</div>
			{
			transactions.map((data, i) => {
				return (
					<Transaction className="transactions"
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

export default TransactionList;
