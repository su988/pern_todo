import React, { Fragment, useEffect, useState } from 'react';

const ListTodos = () => {
  const [todos, setTodo] = useState([]);

  const getTodo = async () => {
    const response = await fetch('http://localhost:5000/todos');
    const jsonData = await response.json();

    setTodo(jsonData);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <Fragment>
      <table className='table w-50 m-auto '>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
