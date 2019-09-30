const CategoriaRouter = require('../Modules/Categorias/categorias.router');

function init(app) {
    app.use('/api/v1/ejemplo', CategoriaRouter);
}

module.exports = { init }