import { useEffect, useState } from "react";
import axios from 'axios';



const AjaxCalls = () => {
    const [list, setList] = useState([]);
    const todoAPI = 'https://aysiab-basic-api-server.herokuapp.com/todo';

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
      };

    const _deleteItem = async (id) => {
        let item = list.filter(i => i._id === id)[0] || {};
        if(item._id) {
          let url = `${todoAPI}/${id}`;
          await axios.delete(url);
          let newList = list.filter(i => i._id !== id);
          setList(newList);
        }
    };

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
    
    useEffect(_getTodoItems, []);

    return [todoAPI, list, setList, _addItem, _deleteItem, _getTodoItems,_toggleComplete];
      


}

export default AjaxCalls;