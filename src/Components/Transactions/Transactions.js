
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import TransactionList from './TransactionList';

const Transaction = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('DEBIT');
		const [transactionSubType, setTransactionSubType] = useState('RENT');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(true);

    const onValue1Change = (event) => {
			setDescription(event.target.value);
    }

    const onValue2Change = (event) => {
			setAmount(event.target.value);
    }

    const onValue3Change = (event) => {
			setTransactionType(event.target.value);
    }

		const onValue4Change = (event) => {
			setTransactionSubType(event.target.value);
		}

    const onSubmit = () => {
        setLoading(true);
        setResult('');
        axios.post(`http://localhost:8080/api/v1/accounts/1/transactions`, { description, amount, transactionType, transactionSubType }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            setLoading(false)
            setResult(res.data.description);
        })
    }

    return (
			<>
        <div className="tab-form">
            <div className="info-card">Add Transaction</div>
            <Form>
                <Form.Group className="mb-3" controlId="value1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter value" onChange={onValue1Change} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="value2">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter value" onChange={onValue2Change} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="value1">
                    <Form.Label>Transaction Type</Form.Label>
                    <Form.Select aria-label="Select Type" onChange={onValue3Change}>
                        <option value="DEBIT">Debit</option>
                        <option value="CREDIT">Credit</option>
                    </Form.Select>
                </Form.Group>

								<Form.Group className="mb-3" controlId="value1">
                    <Form.Label>Transaction Sub Type</Form.Label>
                    <Form.Select aria-label="Select Sub Type" onChange={onValue4Change}>
                        <option value="RENT">Rent</option>
                        <option value="GROCERY">Grocery</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
            <br/>
            {!loading && <div className="info-card">{result}</div>}
        </div>
				<TransactionList></TransactionList>
			</>
    );
}

export default Transaction;