const express = require('express')
const router = express.Router()

const { body, param } = require('express-validator')
const Categoria  = require('../controllers/categorias.controller')

router.get('/findAll', Categoria.obtenerCategorias)

router.get('/findById/:id', [
    param('id').isInt().withMessage('el id debe ser obligatoriamente un numero')
],Categoria.obtenerCategoriasById)

router.post('/create', [
    body('nombreCategoria').notEmpty().withMessage('el nombre es obligatorio'),
    body('iconos').optional().isString().withMessage('los iconos deben ser un texto'),
    body('estado').optional().isString().withMessage('el estado debe ser un texto')
], Categoria.crearCategorias)

router.put('/update/:id', [

    param('id').isInt().withMessage('el id debe ser obligatoriamente un numero'),

    body('nombreCategoria').optional().isString().withMessage('el nombre debe ser un texto'),
    body('iconos').optional().isString().withMessage('los iconos deben ser un texto'),
    body('estado').optional().isString().withMessage('el estado debe ser un texto')

], Categoria.actualizarCategorias)

router.delete('/delete/:id', [
    param('id').isInt().withMessage('el id debe ser obligatoriamente un numero')
], Categoria.eliminarCategoria)


module.exports = router