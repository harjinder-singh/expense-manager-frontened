import moment from 'moment';
import Table from 'react-bootstrap/Table';

const TransactionList = ({transactions}) => {

	let getTableBody = () => {
		if(transactions.length > 0){
			return transactions.map((transaction) => {
				return (
					<tr key={transaction.id}>
						<td>{transaction.id}</td>
						<td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
						<td>{transaction.transactionType}</td>
                        <td>{transaction.transactionSubType}</td>
                        <td>{moment(transaction.transactionDate).format('MMMM Do YYYY')}</td>
					</tr>
				)
			})
		}
	}

	return (
		<div className='transaction-list'>
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
		</div>
	);
}

export default TransactionList;