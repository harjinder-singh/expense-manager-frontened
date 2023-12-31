import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import DatePicker from "react-datepicker";
import { useParams } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";

const AddTransactions = () => {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const { id } = useParams();
    
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('DEBIT');
	const [transactionSubType, setTransactionSubType] = useState('RENT');
    const [transactionDate, setTransactionDate] = useState(new Date());
    
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const onSubmit = () => {
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
        })
        .catch((error) => {
            alert("Something Went Wrong!");
        });
    }

    return (
        <>      
            <div className='add-entity-btn'>
                <Button variant="primary" className="form-button" onClick={handleShow}>
                    Add Transaction
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Transaction</Modal.Title>
                </Modal.Header>
                <div className="entity-form-section">
                    
                    <Form className='entity-form'>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" value={description} onChange={(event) => setDescription(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="transaction-type">
                            <Form.Label>Transaction Type</Form.Label>
                            <Form.Select 
                                aria-label="Select transaction type" 
                                onChange={(event) => setTransactionType(event.target.value)}>
                                <option value="DEBIT">Debit</option>
                                <option value="CREDIT">Credit</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="transaction-sub-type">
                            <Form.Label>Transaction Sub Type</Form.Label>
                            <Form.Select aria-label="Select trasaction sub type" onChange={(event) => setTransactionSubType(event.target.value)}>
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
                            <Form.Label className="form-label">Transaction Date</Form.Label>
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