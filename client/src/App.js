import React, { Fragment, useState, useEffect } from 'react';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

const App = () => {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
};

export default App;
