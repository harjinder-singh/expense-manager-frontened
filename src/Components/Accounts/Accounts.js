import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import AccountsList from './AccountsList';
import AddAccount from './AddAccount';

import './Accounts.css';

const Accounts = () => {
	let [accounts, setAccounts] = useState([]);
	const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    const [balance, setBalance] = useState(0);
    const [accountType, setAccountType] = useState('CHEQUING');

	useEffect(() => {
		getAccounts(id);
	}, [id]);

	const getAccounts = (userId) => {
		axios.get(`http://localhost:8080/api/v1/users/${userId}/accounts`)
		.then((response) => {
			setAccounts(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}

	const onAddAccountSubmit = (balance, accountType) => {
        setLoading(true);
        axios.post(`http://localhost:8080/api/v1/users/${id}/accounts`, {
            balance,  
            accountType
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            setLoading(false);
            setBalance(0);
            setAccountType('CHEQUING');
			getAccounts(id);
        })
        .catch((error) => {
            alert("Something Went Wrong!");
        });
    }

	return (
		<>
			<AddAccount 
				onAddAccountSubmit={onAddAccountSubmit}
				balance={balance}
				accountType={accountType}
				loading={loading}
				setBalance={setBalance}
				setAccountType={setAccountType}
			>
			</AddAccount>
			<AccountsList accounts={accounts}></AccountsList>
		</>
	);
}

export default Accounts;