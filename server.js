'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
   console.log('Received new request from: ' + req.ip);
   res.send('Hello world from WAW\n');
});

app.listen(PORT);
console.log('Running on port: ' + PORT);

