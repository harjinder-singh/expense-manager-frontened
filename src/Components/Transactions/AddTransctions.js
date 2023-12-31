import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddTransactions = () => {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('DEBIT');
	const [transactionSubType, setTransactionSubType] = useState('RENT');
    const [transactionDate, setTransactionDate] = useState(new Date());
    
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const onSubmit = () => {
        setLoading(true);
        axios.post(`http://localhost:8080/api/v1/accounts/1/transactions`, {
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
        });
    }

    return (
        <>      
            <div className='add-transaction-btn'>
                <Button variant="primary" className="form-button" onClick={handleShow}>
                    Add Transaction
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Transaction</Modal.Title>
                </Modal.Header>
                <div className="transaction-form-section">
                    
                    <Form className='transaction-form'>
                        <Form.Group className="mb-3" controlId="value1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter value" value={description} onChange={(event) => setDescription(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="value2">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter value" value={amount} onChange={(event) => setAmount(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="value1">
                            <Form.Label>Transaction Type</Form.Label>
                            <Form.Select 
                                aria-label="Select Type" 
                                onChange={(event) => setTransactionType(event.target.value)}>
                                <option value="DEBIT">Debit</option>
                                <option value="CREDIT">Credit</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="value1">
                            <Form.Label>Transaction Sub Type</Form.Label>
                            <Form.Select aria-label="Select Sub Type" onChange={(event) => setTransactionSubType(event.target.value)}>
                                <option value="RENT">Rent</option>
                                <option value="GROCERY">Grocery</option>
                                <option value="SNACK">Snack</option>
                                <option value="EATOUT">Eatout</option>
                                <option value="SHOPPING">Shopping</option>
                                <option value="SALARY">Salary</option>
                                <option value="TRANSFER">Transfer</option>
                                <option value="RETURN">Return</option>
                                <option value="CASHBACK">Cashback</option>
                                <option value="MISCELLANOUS">Miscellanous</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date" >
                            <label className="form-label" htmlFor="value2">Transaction Date</label>
                            <DatePicker className="form-control" selected={transactionDate} dateFormat="yyyy-MM-dd" onChange={(date) => setTransactionDate(date)} />
                        </Form.Group>
                        <div className="button">
                            <Button variant="primary" className="form-button" onClick={onSubmit}>
                                Submit
                            </Button>
                        </div>
                        
                    </Form>
                    <br/>
                    {!loading && <div className="info-card">Transaction Added Successfully!!</div>}
                </div>
            </Modal>
        
        </>
    );
}

export default AddTransactions;