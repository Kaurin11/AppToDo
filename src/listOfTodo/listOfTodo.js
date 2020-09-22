import React from 'react';

const ListOfTodo = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <tr>
          <td>{todo.text}</td>
          <td>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default ListOfTodo;
