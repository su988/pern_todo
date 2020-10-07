import React, { Fragment, useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className='text-center mt-5'>PERN Todo List </h1>
      <form
        className='d-flex justify-content-center mt-5'
        onSubmit={onFormSubmit}
      >
        <input
          type='text'
          className='w-50 form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
