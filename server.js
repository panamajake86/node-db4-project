const express = require('express');

const RecipeRouter = require('./recipes/recipe-router.js');
const IngredientRouter = require('./recipes/ingredient-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientRouter);

server.get('/', (req, res) => {
    res.send(`
      <h1>DB 4 Project</h1>
      <h3>By: Jake Gifford</h3>
    `);
});

module.exports = server;