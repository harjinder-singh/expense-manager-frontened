import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

import Table from 'react-bootstrap/Table';
import Link from 'react-bootstrap/NavLink';

const TransactionList = () => {
	let [transactions, setTransactions] = useState([]);
	const [searchParams] = useSearchParams();
	const id = searchParams.get("id");

	useEffect(() => {
		axios.get(`http://localhost:8080/api/v1/accounts/${id}/transactions`)
		.then((response) => {
			setTransactions(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}, []);

	let getTableBody = () => {
		if(transactions.length > 0){
			return transactions.map((transaction) => {
				return (
					<tr>
						<td>{transaction.id}</td>
						<td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
						<td>{transaction.transactionType}</td>
                        <td>{transaction.transactionSubType}</td>
                        <td>{moment(transaction.transactionDate).format('MMMM Do YYYY')}</td>
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
                        <th>Transaction No</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Sub Type</th>
                        <th>Transaction Date</th>
					</tr>
			</thead>
			<tbody>
				{ transactions.length > 0 && getTableBody() }
			</tbody>
		</Table>
	);
}

export default TransactionList;