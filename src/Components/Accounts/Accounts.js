import { useState, useEffect } from 'react';
import axios from 'axios';

import AccountsList from './AccountsList';
import './Accounts.css';

const Accounts = () => {
	let [accounts, setAccounts] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8080/api/v1/users/1/accounts')
		.then((response) => {
			setAccounts(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}, []);

	return (
		<AccountsList accounts={accounts}></AccountsList>
	);
}

export default Accounts;