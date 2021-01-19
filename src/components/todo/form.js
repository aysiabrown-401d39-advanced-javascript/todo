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
            {/* <form onSubmit={handleSubmit}>
              <label>
                <span>To Do Item</span>
                <input
                  name="text"
                  placeholder="Add To Do List Item"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <span>Difficulty Rating</span>
                <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
              </label>
              <label>
                <span>Assigned To</span>
                <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
              </label>
              <button>Add Item</button>
            </form> */}
          </>
        );

}

// class TodoForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { item: {} };
//   }
//   handleInputChange = e => {
//     this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     this.props.handleSubmit(this.state.item);
//     const item = {};
//     this.setState({item});
//   };

//   render() {
//     return (
//       <>
//         <h3>Add Item</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <span>To Do Item</span>
//             <input
//               name="text"
//               placeholder="Add To Do List Item"
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             <span>Difficulty Rating</span>
//             <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
//           </label>
//           <label>
//             <span>Assigned To</span>
//             <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
//           </label>
//           <button>Add Item</button>
//         </form>
//       </>
//     );
//   }
// }

export default TodoForm;
