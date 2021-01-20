import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const TodoForm = (props) => {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({...item,[e.target.name]: e.target.value})
  }

  const handleSubmit = e  => {
    e.preventDefault();
    props.handleSubmit(item);
    const obj = {};
    setItem({obj});
  }

  return (
          <>
            <Card>
              <Card.Body>
              <h3>Add Item</h3>
                <Form>
                  <Form.Group controlId="newToDoItem">
                    <Form.Label>To Do Item:</Form.Label>
                    <Form.Control type="text" name="text" placeholder="Add To Do List Item" onChange={handleInputChange}></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicRangeCustom">
                    <Form.Label>Difficulty Rating</Form.Label>
                    <Form.Control defaultValue="1" min="1" max="5" name="difficulty" type="range" onChange={handleInputChange} custom />
                  </Form.Group>
                  <Form.Group controlId="assignTo">
                    <Form.Label>Assign To:</Form.Label>
                    <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange}></Form.Control>
                  </Form.Group>
                  <Button onClick={handleSubmit} variant="primary" size="sm">
                    Add Item
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </>
        );

}


export default TodoForm;
