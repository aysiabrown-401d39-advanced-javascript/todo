import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import ToDo from './components/todo/todo-connected.js';
/* The following line can be included in your src/index.js or App.js file */

import './app.scss';


const App = (props) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand data-testid="homelink" href="/">Home</Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
    </Navbar>
      <ToDo />
    </>
  )
}

export default App;
 
