import React from 'react';
import classes from './TodoItem.module.css';
import Todo from '../models/todo';

const TodoItem: React.FC<{ item: Todo, onRemoveTodo: (todoId: string) => void }> = (props) => {
  const onRemoveTodo = (event: React.FormEvent) => {
    event.preventDefault();
    props.onRemoveTodo(props.item.id);
  };

  return (
    <li className={classes.item} onClick={onRemoveTodo}>{props.item.text}</li>
  );
};

export default TodoItem;