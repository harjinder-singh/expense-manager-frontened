import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import Table from 'react-bootstrap/Table';
import Link from 'react-bootstrap/NavLink';

const Accounts = () => {
	let [accounts, setAccounts] = useState([]);
	let [primary, setPrimary] = useState('');

	console.log(primary);

	useEffect(() => {
		axios.get('http://localhost:8080/api/v1/users/1/accounts')
		.then((response) => {
			setAccounts(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}, []);

	let getTableBody = () => {
		if(accounts.length > 0){
			return accounts.map((account) => {
				return (
					<tr>
						<td>{account.id}</td>
						<td>{account.balance}</td>
						<td>{account.accountType}</td>
						<td>{moment(account.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
						<td><Link href={`/accounts/${account.id}/transactions`} >Add Transaction</Link></td>
					</tr>
				)
			})

		}else {
			return (
				<tr>
					<td>1</td>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				
			)
		}
	}

	return (
		<Table striped bordered hover>
			<thead>
					<tr>
					<th>Account No</th>
					<th>Balance</th>
					<th>Account Type</th>
					<th>Created On</th>
					<th>Action</th>
					</tr>
			</thead>
			<tbody>
				{ accounts.length > 0 && getTableBody() }
			</tbody>
		</Table>
	);
}

export default Accounts;