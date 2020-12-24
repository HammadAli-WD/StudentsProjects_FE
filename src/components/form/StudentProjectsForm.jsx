import React from "react";
import { Button, Form } from "react-bootstrap";

function StudentProjectsForm(props) {
    const { onSubmit, setData, data } = props;
    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Project Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter project title"
                    value={data.name}
                    onChange={(e) => setData({ name: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Project description</Form.Label>
                <Form.Control
                    as={"textarea"}
                    rows={"3"}
                    type="text"
                    placeholder="Enter description"
                    value={data.description}
                    onChange={(e) => setData({ description: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Student ID</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={data.studentID._id}
                    onChange={(e) => setData({ studentID: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Repository URL</Form.Label>
                <Form.Control
                    type="text"
                    value={data.repoURL}
                    onChange={(e) => setData({ repoURL: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Love URL</Form.Label>
                <Form.Control
                    type="text"
                    value={data.liveURL}
                    onChange={(e) => setData({ liveURL: e.target.value })}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
      </Button>
        </Form>
    );
}

export default StudentProjectsForm;