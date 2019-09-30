const express = require('express');
const router = express.Router();

const CategoriaController = require('./categorias.controller');

router.route('/categorias')
  .get(CategoriaController.ListarCategoria);

  module.exports = router;