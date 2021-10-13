import React, { useState, useEffect } from 'react';
import Bill from './Bill.js'
import './bills.css';
// import InsertBill from './InsertBill.js'

const UpcomingBills = (props) => {
	const [bills, setBills] = useState([]);
	const [day, ] = useState(1)

	useEffect(() => {
	  fetch(`${props.host}upcomingBills`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "user_id": props.user_id
			})
		})
			.then(response => response.json())
	    	.then(data => {setBills(data)});
	},[day, props.host, props.user_id])

	return (
		<div>
		  	<div className="heading">
				<h5 className="fl w-25 pa1 tc ml1">Vender</h5> 
				<h5 className="fl w-25 pa1 tc">Amount</h5> 
				<h5 className="fl w-25 pa1 tc">Due Day</h5> 
				<h5 className="fl w-25 pa1 tc">Pay</h5>
			</div>
		  	{
				bills.map((data, i) => {
				return (
					<Bill 
					key={bills[i].bill_id}
					bill_id={bills[i].bill_id}
					amount={bills[i].amount}
					bill_name={bills[i].bill_name}
					due_date={bills[i].due_day}
					bill_website={bills[i].bill_website}
					host={props.host}
					/>
					);
				})
			}
		</div>
	);
}

export default UpcomingBills;











