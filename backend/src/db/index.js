const Usuario = require('./models/usuarios')
const Categoria = require('./models/categorias')
const Gasto = require('./models/gastos')
const Conversion = require('./models/conversiones')
const ValidarEmail = require('./models/ValidarEmail')

module.exports = {
    Usuario,
    Categoria,
    Gasto,
    Conversion,
    ValidarEmail
}