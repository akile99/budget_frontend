import React, { useState, useEffect } from 'react';
import useGetBills from '../../Hooks/useGetBills.js'
import Bill from './Bill.js'
import './bills.css';
// import InsertBill from './InsertBill.js'

const UpcomingBills = (props) => {
	const bills = useGetBills(props.host, props.user_id);

	return (
		<div>
		  	<div className="heading">
				<p className="bill Title">Due Day</p> 
				<p className="vendor Title">Vender</p> 
				<p className="bill Title">Amount</p> 
				<p className="bill Title">Pay</p>
				<p className="bill Title editbill">Edit</p>
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











