import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
// import App from './components/app';
import allTodos from './reducers/selectors';
import Root from './components/root';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('rootEl');
  ReactDOM.render(<Root store={store} />, rootEl);
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
});
