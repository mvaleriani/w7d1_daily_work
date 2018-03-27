import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     title: '',
     body: '',
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let newTodo = Object.assign({}, this.state);
    newTodo.id = new Date().getTime();
    this.props.receiveTodo(newTodo);
  }

  handleTitleChange(e){
    this.setState({title: e.target.value });
  }

  handleBodyChange(e){
    this.setState({body: e.target.value });
  }

  render() {
    return (
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label>Title
          <input type="text" onChange={(e)=> this.handleTitleChange(e)}/>
        </label>

        <label>Body
          <input type="textarea" onChange={(e)=> this.handleBodyChange(e)}/>
        </label>

        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
