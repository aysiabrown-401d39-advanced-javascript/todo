import React, { useState } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup'
// import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'



const TodoList = (props) => {


  return (
    <>
      {props.list.map(item => (
        <Modal.Dialog>
        <Modal.Header closeButton onHide={() => props.handleDelete(item._id)}>
          <Modal.Title onClick = {() => props.handleComplete(item._id)}>
            <Badge pill variant={item.complete ? "success": "danger"}>{item.complete ? "Complete" : "Pending"}</Badge>
            {item.assignee}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{item.text}</p>
          <p>Difficulty: {item.difficulty}</p>
        </Modal.Body>
      </Modal.Dialog>
      ))}
    </>
        );

}


export default TodoList;
