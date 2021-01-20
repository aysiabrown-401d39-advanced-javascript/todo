import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'



const TodoList = (props) => {


  return (
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item 
        data-testid = {item._id}
        variant={item.complete ? 'success': 'danger'} 
        onClick={() => props.handleComplete(item._id)} 
        className={`complete-${item.complete}`} 
        key={item._id}
        > 
              {item.text}
              <br></br>
              Assigned To: {item.assignee}
              
      </ListGroup.Item>
      ))}
    </ListGroup>
        );

}


export default TodoList;
