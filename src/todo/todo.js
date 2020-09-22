import React, { useState } from 'react';
import AddTodos from '../addTodos/addTodos';
import EditTodo from '../editTodo/editTodo';
import ListOfTodo from '../listOfTodo/listOfTodo';

const Todo = () => {
  const myTodos = [
    { id: 1, text: 'Buy a milk' },
    { id: 2, text: 'Finish App' },
    { id: 3, text: 'Go to gym' },
  ];

  const [todos, setTodos] = useState(myTodos);
  const [edit, setEdit] = useState(false);

  const initialTodo = { id: null, text: '' };
  const [currentTodo, setCurrentTodo] = useState(initialTodo);

  const editTodo = (todo) => {
    setEdit(true);

    setCurrentTodo({ id: todo.id, text: todo.text });
  };

  const addTodo = (text, todoId) => {
    todoId = todos.length + 1;
    console.log(todos.length);
    console.log(text, todos.id);
    setTodos([...todos, { text, id: todoId }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      <div className="todoList">
        <ListOfTodo todos={todos} deleteTodo={deleteTodo} />
      </div>
      <div>
        <EditTodo
          edit={edit}
          setEdit={setEdit}
          currentTodo={currentTodo}
          editTodo={editTodo}
        />
      </div>

      <div>
        <AddTodos addTodo={addTodo} />
      </div>
    </div>
  );
};

export default Todo;
