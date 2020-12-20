const express = require('express');
const routes = express.Router();
const CommentsController = require('./controllers/CommentsController')


routes.get(`/all`, CommentsController.index);
routes.post('/', CommentsController.create);
routes.delete('/:_id', CommentsController.destroy);
routes.put('/:_id', CommentsController.update);

module.exports = routes;
