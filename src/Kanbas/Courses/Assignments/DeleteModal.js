import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = ({show, onClose, onDelete}) => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            {/*<Button variant="primary" onClick={handleShow}>*/}
            {/*    Launch static backdrop modal*/}
            {/*</Button>*/}

            <Modal
                show={show}
                onHide={onClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to remove the assignment?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={(e) => {
                        onDelete();
                        onClose();
                    }}
                    >Ok</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;