import React, { useState } from 'react';
import Search from '../Search/Search.js'

import './inputTransactions.css'

const InputTransaction = (props) => {
	const [date, setDate] = useState('')
	const [vendor, setVendor] = useState('')
	const [amount, setAmount] =	useState('')
	const [status, setStatus] = useState('Pending')
	const [category, setCategory] = useState()

	// const getStingDate = (date) => {
	// 	const d = new Date();

	// 	const year = d.getFullYear();
	// 	let month = (d.getMonth() + 1)
	// 	let day = d.getDate();

	// 	month < 10 ? month = `0${month}` : month = `${month}`
	// 	day < 10 ? day = `0${day}` : day = `${day}`;
	  
	//   	return `${year}-${month}-${day}`;
	// 	//return `1981-03-02`;
	// }

	const onDateChange = (event) => {
		setDate(event.target.value)
	}

	const onVendorChange = (event) => {
		setVendor(event.target.value)
	}

	const onAmountChange = (event) => {
		const str = event.target.value; 
  		const res = str.replace(/,/g, "")
		setAmount(res)
	}

	const onStatusChange = (event) => {
		status === 'Pending' ? setStatus('Cleared') : setStatus('Pending')
	}

	const onCategoryChange = (event) => {
		setCategory(event)
	}

	const onCommitIncome = () => {
		onCommitTransaction(amount)
	}

	const onCommitExpense = () => {
		onCommitTransaction(-amount)
	}

	const onCommitTransaction = (amount) => {
		fetch(props.host+'insert', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "date": date,
			  "vendor": vendor,
			  "category": category,
			  "status": status,
			  "amount": amount,
			  "account_id": props.account_id
			})
		})
			.then(response => response.json())
			.catch(console.log)
		setDate('')
		setVendor('')
		setDate('')
		setAmount('')
		setStatus('Pending')
		setCategory('')
		props.onChange()
	}

	// const stringDate = getStingDate();

	return (
		<div className='center'>
			<div className='form center pa4 br3 shadow-5'>
				<input 
					className= 'f4 pa2 w-25 center' 
					type='date' 
					id='date'
					name='date'
					value={date}
					onChange={onDateChange}
				/>
				<input 
					className= 'f4 pa2 w-25 center' 
					type= 'text' 
					placeholder="Vendor"
					id='Vendor'
					name='Vendor'
					value={vendor}
					onChange={onVendorChange}
				/>
				<input 
					className= 'f4 pa2 w-25 center' 
					type= 'double' 
					placeholder="Amount"
					id='Amount'
					name='Amount'
					value={amount}
					onChange={onAmountChange}
				/>
				<button 
					className= 'w-30 link ph3 pv2 dib btn-white' 
					id='CommitTransactionBTN'
					onClick={onStatusChange}
				>
				{status}
				</button>
				<Search 
					className= 'f4 pa2 w-30 center' 
					onChange={onCategoryChange}
					host={props.host}
				/>
				<button 
					className= 'w-10 grow f4 link ph3 pv2 dib white bg-light-blue' 
					id='CommitTransactionBTN'
					onClick={onCommitExpense}
				>
				Expense
				</button>
				<button 
					className= 'w-10 grow f4 link ph3 pv2 dib white bg-light-blue' 
					id='CommitTransactionBTN'
					onClick={onCommitIncome}
				>
				Income
				</button>
			</div>
		</div>
	);
}

export default InputTransaction;