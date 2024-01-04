
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
	const [loading, setLoading] = useState(true);
    
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('DEBIT');
	const [transactionSubType, setTransactionSubType] = useState('RENT');
    const [transactionDate, setTransactionDate] = useState(new Date());

	useEffect(() => {
		getTransactions(id);
	}, [id]);

	const getTransactions = (accountId) => {
		axios.get(`http://localhost:8080/api/v1/accounts/${accountId}/transactions`)
		.then((response) => {
			setTransactions(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}

	const onAddTransactionSubmit = (
		description, 
		amount, 
		transactionType, 
		transactionSubType, 
		transactionDate ) => {
		setLoading(true);
        axios.post(`http://localhost:8080/api/v1/accounts/${id}/transactions`, {
            description, 
            amount, 
            transactionType, 
            transactionSubType, 
            transactionDate 
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            setLoading(false);
            setDescription('');
            setAmount('');
            setTransactionType('DEBIT');
	        setTransactionSubType('RENT');
            setTransactionDate(new Date());
			getTransactions(id);
        })
        .catch((error) => {
            alert("Something Went Wrong!");
        });
	}

    return (
			<>
                <AddTransactions
					onAddTransactionSubmit={onAddTransactionSubmit}
					loading={loading}
					description={description}
					amount={amount} 
					transactionType={transactionType} 
					transactionSubType={transactionSubType} 
					transactionDate={transactionDate}
					setAmount={setAmount}
					setDescription={setDescription}
					setTransactionType={setTransactionType}
					setTransactionSubType={setTransactionSubType}
					setTransactionDate={setTransactionDate}
				>
				</AddTransactions>
				<TransactionList transactions={transactions}></TransactionList>
			</>
    );
}

export default Transaction;