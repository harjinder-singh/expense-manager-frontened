import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddAccount = () => {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const { id } = useParams();
    
    const [balance, setBalance] = useState(0);
    const [accountType, setAccountType] = useState('CHEQUING');
    
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const onSubmit = () => {
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
        })
        .catch((error) => {
            alert("Something Went Wrong!");
        });
    }

    return (
        <>      
            <div className='add-entity-btn'>
                <Button variant="primary" className="form-button" onClick={handleShow}>
                    Add Account
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Account</Modal.Title>
                </Modal.Header>
                <div className="entity-form-section">
                    
                    <Form className='entity-form'>

                        <Form.Group className="mb-3" controlId="balance">
                            <Form.Label>Balance</Form.Label>
                            <Form.Control type="number" placeholder="Enter value" value={balance} onChange={(event) => setBalance(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="account-type">
                            <Form.Label>Account Type</Form.Label>
                            <Form.Select 
                                aria-label="Select Type" 
                                onChange={(event) => setAccountType(event.target.value)}>
                                <option value="CHEQUING">Chequing</option>
                                <option value="SAVING">Saving</option>
                                <option value="CREDITCARD">CreditCard</option>
                            </Form.Select>
                        </Form.Group>

                        <div className="button">
                            <Button variant="primary" className="form-button" onClick={onSubmit}>
                                Submit
                            </Button>
                        </div>
                        
                    </Form>
                    <br/>
                    {!loading && <div className="info-card">Account Added Successfully!!</div>}
                </div>
            </Modal>
        
        </>
    );
}

export default AddAccount;