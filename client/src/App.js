import React, { Fragment, useState, useEffect } from 'react';
import InputTodo from './components/InputTodo';

const App = () => {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
      </div>
    </Fragment>
  );
};

export default App;
