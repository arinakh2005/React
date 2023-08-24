import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onRemove: (todoId: string) => void }> = (props) => {
  const onRemoveTodo = (todoId: string) => {
    props.onRemove(todoId);
  };

  return (
    <ul className={classes.todos}>
      {props.items.map((item) =>
       <TodoItem
         key={item.id}
         item={item}
         onRemoveTodo={onRemoveTodo}
       />
      )}
    </ul>
  );
};

export default Todos;