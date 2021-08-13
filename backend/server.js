const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //bodyParser is included in new version of express

// Mongoodb setup using mongoose 
const uri = process.env.ATLAS_URI;
 mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => { //once mongoodb connected successfully, log below message
  console.log("MongoDB database connection established successfully");
})

// Routing
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});