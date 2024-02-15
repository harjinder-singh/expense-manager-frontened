
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux'
import { apiSlice } from '../App/api/apiSlice';

import TransactionList from './TransactionList';
import AddTransactions from "./AddTransctions";
import AddTransactionsFromFile from './AddTransactionsFromFile';
import { 
	useGetTransactionsQuery, 
	useAddTransactionMutation,
	useAddTransactionsfromFileMutation
 } from './transactionsApiSlice';

import {} from '../App/api/apiSlice'

import './Transactions.css';

const Transaction = () => {
	const { id } = useParams();
	const { data: transactions, isLoading } = useGetTransactionsQuery(id);
	const [addTransaction, {isLoading: addTransactionLoading}] = useAddTransactionMutation();
	const [addTransactionFromFile, {isLoading: addTransactionsFileLoading}] = useAddTransactionsfromFileMutation();
	const dispatch = useDispatch()
    
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('DEBIT');
	const [transactionSubType, setTransactionSubType] = useState('RENT');
    const [transactionDate, setTransactionDate] = useState(new Date());
	const [formatType, setFormatType] = useState("yyyy-MM-dd");

	const [file, setFile] = useState('');

	const handleFileUpload = (event) => {
		setFile(event.target.files[0])
	}

	const onAddTransactionSubmit = async (
		description, 
		amount, 
		transactionType, 
		transactionSubType, 
		transactionDate ) => {
		try{
			await addTransaction({
				id, 
				description, 
				amount, 
				transactionType, 
				transactionSubType, 
				transactionDate
			}).unwrap();
			dispatch(apiSlice.util.invalidateTags(['Account']));
			setDescription('');
            setAmount('');
            setTransactionType('DEBIT');
	        setTransactionSubType('RENT');
            setTransactionDate(new Date());

		} catch(error) {
            alert("Something Went Wrong!");
        };
	}

	const onAddTransactionsSubmit = async (event) => {
		event.preventDefault();
		try{
			let bodyFormData = new FormData();
            bodyFormData.append('file', file)
            bodyFormData.append('formatType', formatType);
			bodyFormData.append('Content-Type', file.type);
			await addTransactionFromFile({id, bodyFormData}).unwrap();
			setFile('');

		} catch(e) {
			alert(`Error uploading CSV file. ${e.message}`);
		};
	
	  }

    return (
			<>
				<div className='buttons-array'>
					<AddTransactions
						onAddTransactionSubmit={onAddTransactionSubmit}
						loading={addTransactionLoading}
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
					<AddTransactionsFromFile
						loading={addTransactionsFileLoading}
						handleFileUpload={handleFileUpload}
						formatType={formatType}
						setFormatType={setFormatType}
						onAddTransactionsSubmit={onAddTransactionsSubmit}
					></AddTransactionsFromFile>
				</div> 
				{!isLoading && <TransactionList transactions={transactions}></TransactionList> }
			</>
    );
}

export default Transaction;