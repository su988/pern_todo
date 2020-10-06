const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json()); // in a full stack app the only way to..
// get data from the client side is to
// get it from the req.body object.

// Routes

// create a todo

// get all todos

// get a todo

// update a todo

// delete a todo

//

app.listen(5000, () => {
  console.log('server running');
});
