const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3000;

app.get('/', (req, res) => {
  res.type('html');
  res.status(200);
  res.end("Home");
})

app.get('/posts', (req, res) => {
  res.type('html');
  res.status(200);
  res.end("Liste des articles");
})

app.get('/posts/:id', (req, res) => {
  res.type('html');
  res.status(200);
  res.end("Article : " + req.params.id);
})

app.listen(port, hostname);
