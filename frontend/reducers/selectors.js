const allTodos = ( {todos} ) => {
  let keys = Object.keys(todos);
  return keys.map(id => todos[id]);
};

export default allTodos;
