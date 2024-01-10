import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddTransactionsFromFile = ({
        loading, 
        handleFileUpload,
        formatType,
        setFormatType, 
        onAddTransactionsSubmit
    }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <div className='add-entity-btn'>
                <Button variant="primary" className="form-button" onClick={handleShow}>
                    Add Transactions
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Transactions</Modal.Title>
                </Modal.Header>
                <div className="entity-form-section">
                <Form className='file-upload-form' onSubmit={onAddTransactionsSubmit}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload CSV file</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="format-type">
                            <Form.Label>Format Type</Form.Label>
                            <Form.Select 
                                aria-label="Select format type"
                                value={formatType} 
                                onChange={(event) => setFormatType(event.target.value)}>
                                <option value="MM/dd/yyyy">Scotiabank</option>
                                <option value="yyyy-MM-dd">CIBC</option>
                            </Form.Select>
                        </Form.Group>
                    <div className="button">
                        <Button variant="primary" className="form-button" type='submit'>
                            Submit
                        </Button>
                    </div>
                </Form>
                <br/>
                    {!loading && <div className="info-card">Transactions Added Successfully!!</div>}
                </div>
            </Modal>
        </>
    );
}

export default AddTransactionsFromFile;