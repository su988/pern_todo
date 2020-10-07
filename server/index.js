const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json()); // lets us access req.body in json format (client side data)

// Routes

// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows[0]); // this + RETURNING * (postman return only data)
  } catch (err) {
    console.log(err.message);
  }
});

// get all todos

app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todo;');

    res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2',
      [description, id]
    );

    res.json('todo was updated!');
  } catch (err) {
    console.error(err.message);
  }
});

// delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const delTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [
      id
    ]);

    res.json('Todo was deleted');
  } catch (err) {
    console.error(err.message);
  }
});

//

app.listen(5000, () => {
  console.log('server running');
});
