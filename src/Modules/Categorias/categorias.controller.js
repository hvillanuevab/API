const path = require('path');
const db = require('../../Database/db.conexion');

exports.ListarCategoria = (req, res) => {
    let query = `select * from categorias`;
    db.any(query)
    .then(data => res.json({ data }))
    .catch(err => res.status(500).json({ success: false, message: err.message, err }))
  }