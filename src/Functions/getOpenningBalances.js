const getOpenningBalances = (props) => {
	// const [open_balance, setOpenBalance] = useState(0)
	// fetch(`${props.host}openningbalance`, {
	// 	method: 'post',
	// 	headers: {'Content-Type': 'application/json'},
	// 	body: JSON.stringify({
	// 		"account_id": props.account_id
	// 	})
	// })
	// 	.then(response => response.json())
	// 	.then(data => setOpenBalance(data[0].openningbalance));
	return (props.host + ' ' + props.account_id);
}

export default getOpenningBalances;
