import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddUser = ({onAddUserSubmit, firstName, lastName, email, loading,
                    setFirstName, setLastName, setEmail}) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = () => {
        onAddUserSubmit(firstName, lastName, email);
    }

    return (
        <>      
            <div className='add-entity-btn'>
                <Button variant="primary" className="form-button" onClick={handleShow}>
                    Add User
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <div className="entity-form-section">
                    
                    <Form className='entity-form'>

                        <Form.Group className="mb-3" controlId="first-name">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" placeholder="Enter FirstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="last-name">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" placeholder="Enter LastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>
                        <div className="button">
                            <Button variant="primary" className="form-button" onClick={onSubmit}>
                                Submit
                            </Button>
                        </div>
                        
                    </Form>
                    <br/>
                    {!loading && <div className="info-card">User Added Successfully!!</div>}
                </div>
            </Modal>
        </>
    );
}

export default AddUser;