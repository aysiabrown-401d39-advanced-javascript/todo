import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'



const TodoList = (props) => {
  const [complete, setComplete] = useState('danger')
  const [finished, setFinished] = useState([]);

  const markComplete = (id) => {
    props.handleComplete(id);
    setFinished([...finished, id])
  }

  return (
    <ListGroup as="ul">
      {props.list.map(item => (
        <ListGroup.Item 
        data-testid = {item._id}
        variant={finished.includes(item._id) ? 'success': 'danger'} 
        onClick={() => markComplete(item._id)} 
        as="li" className={`complete-${item.complete.toString()}`} 
        key={item._id}
        > 
              {item.text}
              <br></br>
              Assigned To: {item.assignee}
              
      </ListGroup.Item>
      ))}
    </ListGroup>
          // <ul>
          //   {props.list.map(item => (
          //     <li
          //       className={`complete-${item.complete.toString()}`}
          //       key={item._id}
          //     >
          //       <span onClick={() => props.handleComplete(item._id)}>
          //         {item.text}
          //       </span>
          //     </li>
          //   ))}
          // </ul>
        );

}

// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

export default TodoList;
