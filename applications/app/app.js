const express = require('express');
const http = require('http');
const { find, save, update, remove } = require('./source/services/product');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Funcionando tudo'));

app.get('/products', async (req, res) => res.send(await find()))
  .post('/products', async (req, res) =>
    res.status(201).send(await save(req.body))
  )
  .put('/products/:id', async (req, res) =>
    res.status(204).send(await update(req.params.id, req.body))
  )
  .delete('/products/:id', async (req, res) =>
    res.status(204).send(await remove(req.params.id))
  );

const server = http.createServer(app);

module.exports = server;