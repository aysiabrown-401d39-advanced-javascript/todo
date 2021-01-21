import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar'

import './todo.scss';
import useAjaxCalls from '../../hooks/ajax.js';

const todoAPI = 'https://aysiab-basic-api-server.herokuapp.com/todo';


const ToDo = () => {
  const [todoAPI, list, setList, _addItem, _deleteItem, _getTodoItems,_toggleComplete] = useAjaxCalls();

  return (
    <>
        <header>
          <Navbar bg="light">
            <Navbar.Brand>There are {list.filter(item => !item.complete).length} Items To Complete</Navbar.Brand>
          </Navbar>
        </header>

      <section className="todo">

        <div>
          <TodoForm 
          handleSubmit={_addItem}
          />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem} 
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
