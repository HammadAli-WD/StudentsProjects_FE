import React from "react";
import { Button, Modal } from "react-bootstrap";

function CustomModal(props) {
    const [show, setShow] = React.useState(false);
    const closeModal = () => {
        setShow(false);
    };

    return (
        <>
            <span onClick={() => setShow(true)}>{props.triggerBtn}</span>

            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {React.cloneElement(props.children, {
                        closeModal: () => closeModal(),
                    })}
                </Modal.Body>
            </Modal>
        </>
    );
}
export default CustomModal;