import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import AccountsList from './AccountsList';
import AddAccount from './AddAccount';

import './Accounts.css';

const Accounts = () => {
	let [accounts, setAccounts] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:8080/api/v1/users/${id}/accounts`)
		.then((response) => {
			setAccounts(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}, [id]);

	return (
		<>
			<AddAccount></AddAccount>
			<AccountsList accounts={accounts}></AccountsList>
		</>
	);
}

export default Accounts;