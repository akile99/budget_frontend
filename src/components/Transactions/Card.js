import React, { useState } from 'react';
import Search from '../Search/Search.js'
import './Card.css';

// const getStingDate = require('./Functions/getStingDate');

const Card = (props) => {
	const { transaction_id, accountid } = props;
	const [edit, setEdit] = useState(false);
	const [date, setDate] = useState(props.date)
	const [vendor, setVendor] = useState(props.vendor)
	const [amount, setAmount] =	useState(props.amount)
	const [category, setCategory] = useState(props.category)
	const [s, setS] = useState(props.status);

	function getFormattedDate(date) {
		const d = new Date(date);

		const year = d.getFullYear();
		const month = (d.getMonth() + 1)
		const day = d.getDate() + 1;
	  
	  return month + '-' + day + '-' + year;
	}

	function getStingDate(date) {
		const d = new Date(date);

		const year = d.getFullYear();
		let month = (d.getMonth() + 1)
		let day = d.getDate();

		month < 10 ? month = `0${month}` : month = `${month}`
		day < 10 ? day = `0${day}` : day = `${day}`;
	  
	  return `${year}-${month}-${day}`;
	}

	const handelStatus = (transaction_id, s, vendor) => {
		fetch(`${props.host}updateStatus`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "transaction_id": transaction_id,
			  "accountid": accountid
			})
		})
			.then(response => response.json())
			.catch(console.log)
		s === 'Cleared' ? setS('Pending') :	setS('Cleared')
		props.onChange()
		console.log(transaction_id, vendor)

	}

	const handelEdit = (transaction_id) => {
		setEdit(!edit)
	}

	const onDateChange = (event) => {
		setDate(event.target.value)
	}

	const onVendorChange = (event) => {
		setVendor(event.target.value)
	}

	const onAmountChange = (event) => {
		setAmount(event.target.value)
	}

	const onCategoryChange = (event) => {
		setCategory(event)
	}

	const onUpdateTransaction = () => {
		fetch(props.host+'update', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "date": date,
			  "vendor": vendor,
			  "category": category,
			  "status": props.status,
			  "amount": amount,
			  "transaction_id": transaction_id
			})
		})
			.then(response => response.json())
			.catch(console.log)
		setVendor(vendor)
		setDate(stringDate)
		setAmount(amount)
		setCategory(category)
		handelEdit(transaction_id)
		props.onChange()

	}

	const formatedDate = getFormattedDate(date)
	const stringDate = getStingDate(date)
	// const removeTransactions = handelRemove(id)
	return (
		<div>
		{ !edit
		? <div className="flex justify-center">
			<p className="fl w-10 tc">{formatedDate}</p> 
			<p className="fl w-30 tc">{vendor}</p> 
			<p className="fl w-20 tc">${amount}</p> 
			<button 
				className="fl w-10 tc bg-white "
				onClick={() => handelStatus(transaction_id, s, vendor)}
			>{s}
			</button> 
			<p className="fl w-30 tc">{category}</p>
			<button 
				className="fl w-10 tc bg-white" 
				onClick={() => handelEdit(transaction_id)}>edit
			</button>
		</div>
		: 	<div className="flex justify-center">
				<p className="fl w-10 tc">{transaction_id}</p> 
				<input 
					className= 'f4 pa2 w-60 center' 
					type='date' 
					id='date'
					name='date'
					value={stringDate}
					onChange={onDateChange}
				/>
				<input 
					className= 'f4 pa2 w-70 center' 
					type= 'text' 
					placeholder="Vendor"
					id='Vendor'
					name='Vendor'
					value={vendor}
					onChange={onVendorChange}
				/>
				<input 
					className= 'f4 pa2 w-70 center' 
					type= 'double' 
					placeholder="Amount"
					id='Amount'
					name='Amount'
					value={amount}
					onChange={onAmountChange}
				/>
				<Search 
					onChange={onCategoryChange}
				/>
				<button onClick={handelEdit}>Cancel </button>
				<button onClick={onUpdateTransaction}>Update </button>
				{/*	<button onClick={removeTransactions}>Del </button>*/}		
			</div>
		}
		</div>

		);

}

export default Card;