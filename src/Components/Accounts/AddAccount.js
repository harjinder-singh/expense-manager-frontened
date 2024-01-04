import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddAccount = ({
    onAddAccountSubmit,
    balance,
    accountType,
    loading,
    setBalance,
    setAccountType }) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const onSubmit = () => {
        onAddAccountSubmit(balance, accountType);
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
                                value={accountType}
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