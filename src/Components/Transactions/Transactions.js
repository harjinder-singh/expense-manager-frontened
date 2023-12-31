
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

import TransactionList from './TransactionList';
import AddTransactions from "./AddTransctions";
import './Transactions.css';

const Transaction = () => {
    let [transactions, setTransactions] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		axios.get(`http://localhost:8080/api/v1/accounts/${id}/transactions`)
		.then((response) => {
			setTransactions(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}, [id]);

    return (
			<>
                <AddTransactions></AddTransactions>
				<TransactionList transactions={transactions}></TransactionList>
			</>
    );
}

export default Transaction;