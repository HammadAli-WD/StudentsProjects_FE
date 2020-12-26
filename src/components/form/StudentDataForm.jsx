import React from "react";
import { Button, Form } from "react-bootstrap";

function StudentDataForm(props) {
    const { onSubmit, setData, singleData } = props;
    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={singleData.name}
                    onChange={(e) => setData({ name: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter surname"
                    value={singleData.surname}
                    onChange={(e) => setData({ surname: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={singleData.email}
                    onChange={(e) => setData({ email: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter country"
                    value={singleData.country}
                    onChange={(e) => setData({ country: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    type="date"
                    value={singleData.dateOfBirth}
                    onChange={(e) => setData({ dateOfBirth: e.target.value })}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
      </Button>
        </Form>
    );
}

export default StudentDataForm;