import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {todos} = this.props;
    return (
      <div>
        <ul>
          {todos.map(t => <TodoListItem key={t.id} todo={t} />)}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }
}

export default TodoList;
