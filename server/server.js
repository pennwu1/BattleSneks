const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname +'./../')); //serves the index.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.listen(port, () => {
//   console.log('App listening on port ' + port)
// });

module.exports.app = app;