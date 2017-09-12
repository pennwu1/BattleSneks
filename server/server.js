const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const userController = require('../database/users/userController');

app.use(express.static(__dirname +'./../')); //serves the index.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sign up logic
app.post('/signup', userController.createUser); // redirect to home page
app.get('/signin', userController.findUser); // redirect to home page
// app.get('/home', ((req, res) => { console.log('hi') }));

app.listen(port, () => {
  console.log('App listening on port ' + port);
});

module.exports = app;