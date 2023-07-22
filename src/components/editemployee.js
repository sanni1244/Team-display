import React, { useState } from 'react';
import { Button, Modal, Form } from "react-bootstrap";

function Edit({ member, update }) {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState(member.name);
    const [role, setRole] = useState(member.role);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the update function passed from the TeamSection component
        update(member.id, name, role);
        handleCloseModal();
    };

    return (
        <div className="flex justify-center items-center">
            <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg animate-pulse"
                variant="primary"
                onClick={handleShowModal}
            >
                Open Modal
            </button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Form.Group className="mb-3" id="">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Name"
                                onChange={(e) => { setName(e.target.value) }}
                                value={name}
                                id="name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Role"
                                onChange={(e) => { setRole(e.target.value) }}
                                value={role}
                                id="role"
                            />
                        </Form.Group>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="px-4 py-2 bg-pink-500 text-white rounded-md mr-2"
                        onClick={handleCloseModal}
                    >
                        Close
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-500 text-white rounded-md"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Edit;
