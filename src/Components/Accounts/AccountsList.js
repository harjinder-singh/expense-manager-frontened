import AccountCard from './AccountCard';

const AccountsList = ({accounts}) => {

    let displayCards = () => {
		return accounts.map((account) => {
			return (
				<AccountCard key={account.id} account={account}></AccountCard>
			)
		});
	}

    return (
		<div className='cards'>
			{ accounts.length > 0 && displayCards()}
		</div>
    )
}

export default AccountsList;