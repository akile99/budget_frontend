import { useState, useEffect } from 'react';

export default function useGetBills(host, user_id) {
	const [bills, setBills] = useState([]);

	useEffect(() => {
	  fetch(`${host}upcomingBills`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			  "user_id": user_id
			})
		})
			.then(response => response.json())
	    	.then(data => {setBills(data)});
	},[host, user_id])

	return bills;
}
