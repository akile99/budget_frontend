import React from 'react';
// import Search from '../Search/Search.js'

// const getStingDate = require('./Functions/getStingDate');

const Card = (props) => {
	const { account_id, account_name, account_type } = props;
	// const [sum, setSum] = useState(0)

	const handelLoadAccount = () => {
		props.onChange(account_id)
	}

	// useEffect(() => {
	// 	try {
	// 		fetch(`${props.host}sumCleared`, {
	// 			method: 'post',
	// 			headers: {'Content-Type': 'application/json'},
	// 			body: JSON.stringify({
	// 			  "account_id": account_id
	// 			})
	// 		})
	// 			.then(response => response.json())
	// 	      	.then(data => setSum(data[0].sum));
	// 	} catch (error) {
	// 		console.error(error)
	// 	} 
	// },[account_id, props.submit, props.host])	

	return (
		<div className="flex">
			<button 
				className="fl w-30 tc tc bg-white "
				onClick={() => handelLoadAccount()}
			>{account_name + " " + account_type}		
			{/*>{account_name + " " + account_type + " $ " + sum}*/}
			</button>
		</div>

		);



}

export default Card;