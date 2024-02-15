import { useState,} from 'react';
import { useParams } from 'react-router-dom';

import AccountsList from './AccountsList';
import AddAccount from './AddAccount';
import { useGetAccountsQuery, useAddAccountMutation } from './accountsApiSlice';

import './Accounts.css';

const Accounts = () => {
    const { id } = useParams();
    const {data: accounts, isLoading } = useGetAccountsQuery(id);
	const [addAccount, { isLoading: addAccountLoading }] = useAddAccountMutation()
    const [balance, setBalance] = useState(0);
    const [accountType, setAccountType] = useState('CHEQUING');

	const onAddAccountSubmit = async (balance, accountType) => {
		console.log("Inside func", balance, accountType);
		try{
			await addAccount({id, balance, accountType }).unwrap();
			setBalance(0);
			setAccountType('CHEQUING');

        } catch(error) {
            alert("Something Went Wrong!");
        };
    }

	return (
		<>
			<AddAccount 
				onAddAccountSubmit={onAddAccountSubmit}
				balance={balance}
				accountType={accountType}
				loading={addAccountLoading}
				setBalance={setBalance}
				setAccountType={setAccountType}
			>
			</AddAccount>
			{!isLoading && <AccountsList accounts={accounts}></AccountsList> }
		</>
	);
}

export default Accounts;