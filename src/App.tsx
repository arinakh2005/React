import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((previousState) =>
      previousState.concat(newTodo),
    );
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((previousState) =>
      previousState.filter((todo) => todo.id !== todoId),
    );
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </div>
  );
}

export default App;
