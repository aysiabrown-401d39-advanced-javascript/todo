import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar'

import './todo.scss';

const todoAPI = 'https://aysiab-basic-api-server.herokuapp.com/todo';


const ToDo = () => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    axios.post(todoAPI, {
      complete: false,
      text: item.text,
      difficulty: item.difficulty,
      assignee: item.assignee,
    }).then(response => {
      setList([...list, response.data])
    }).catch(e => {
      console.log(e);
    })
    // item.due = new Date();
    // fetch(todoAPI, {
    //   method: 'post',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(item)
    // })
    //   .then(response => response.json())
    //   .then(savedItem => {
    //     setList([...list, savedItem])
    //   })
    //   .catch(console.error);
  };

  const _deleteItem = async (id) => {
    let item = list.filter(i => i._id === id)[0] || {};
    if(item._id) {
      let url = `${todoAPI}/${id}`;
      await axios.delete(url);
      let newList = list.filter(i => i._id !== id);
      setList(newList);
    }
  }

  const _toggleComplete = async (id) => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      console.log('complete befre', item.complete)
      item.complete ? item.complete = false : item.complete = true;
      let url = `${todoAPI}/${id}`;
      console.log('after', item.complete)
      let response = await axios.put(url, { complete: item.complete}) // WHY WONT YOU UPDATE TO FALSE WHEN RE CLICKED???
      console.log(response.data);
      setList(list.map(listItem => listItem._id === item._id ? response.data : listItem))
      console.log(list);
      // fetch(url, {
      //   method: 'put',
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(item)
      // })
      //   .then(response => response.json())
      //   .then(savedItem => {
      //     setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
      //   })
      //   .catch(console.error);
    }
  };

  const _getTodoItems = async () => {
    try {
      var response = await axios.get(todoAPI);
     // console.log(response); 
    } catch (e) {
      console.error(e);
    }
    let newList = response.data;
    console.log(response.data);

    setList(newList);
  };

  useEffect(_getTodoItems, []); //TODO: get useEffect to update after each new list item

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
          handleSubmit={_addItem}/>
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
