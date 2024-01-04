import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import { transactionSubTypeList } from '../../Utils/Utils';

import "react-datepicker/dist/react-datepicker.css";

const AddTransactions = ({
        onAddTransactionSubmit,
        loading,
        description,
        amount, 
        transactionType,
        transactionSubType, 
        transactionDate,
        setAmount,
        setDescription,
        setTransactionType,
        setTransactionSubType,
        setTransactionDate
    }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const onSubmit = () => {
        onAddTransactionSubmit(
            description, 
            amount, 
            transactionType, 
            transactionSubType, 
            transactionDate );
    }

    const getTransactionSubType = () => {
        return transactionSubTypeList.map((type) => {
            return <option value={type}>{type}</option>
        })
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
                                value={transactionType} 
                                onChange={(event) => setTransactionType(event.target.value)}>
                                <option value="DEBIT">DEBIT</option>
                                <option value="CREDIT">CREDIT</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="transaction-sub-type">
                            <Form.Label>Transaction Sub Type</Form.Label>
                            <Form.Select aria-label="Select trasaction sub type"
                                value={transactionSubType}
                                onChange={(event) => setTransactionSubType(event.target.value)}>
                                {getTransactionSubType()}
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