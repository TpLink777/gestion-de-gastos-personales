const express = require('express')
const router = express.Router()

const { body, param } = require('express-validator')
const Conversion = require('../controllers/conversiones.controller')

router.get('/findAll', Conversion.obtenerConversiones)

router.get('/findById/:id', [

    param('id').isInt().withMessage('este campo debe ser obligatoriamente un numero')

], Conversion.obtenerConversionesById)

router.post('/create', [

    body('monedaOrigen').notEmpty().isString().withMessage('monedaOrigen es un  campo obligatorio'),
    body('monedaDestino').notEmpty().isString().withMessage('monedaDestino es un campo  obligatorio'),
    body('tasa').notEmpty().isInt().withMessage('tasa es un campo obligatorio'),
    body('monedaBase').notEmpty().isInt().isLength({ min: 1 }).withMessage('monedaBase es un campo obligatorio'),
    body('fecha').notEmpty().isDate().withMessage('fecha es un campo obligatorio'),
    body('usuarioId').isInt().withMessage('usuarioId debe ser un número')

], Conversion.crearConversion)

router.put('/update/:id', [

    param('id').isInt().withMessage('este campo debe ser obligatoriamente un numero'), 

    body('monedaOrigen').optional().isString().withMessage('monedaOrigen debe ser un texto'),
    body('monedaDestino').optional().isString().withMessage('monedaDestino debe ser un texto'),
    body('tasa').optional().isInt().withMessage('tasa debe ser un numero'),
    body('monedaBase').notEmpty().isInt({ min: 1 }).withMessage('monedaBase debe ser un número mayor o igual a 1'),
    body('fecha').optional().isDate().withMessage('fecha debe ser un campo tipo date'),

], Conversion.actualizarConversiones)

router.delete('/delete/:id', [

    param('id').isInt().withMessage('este campo debe ser obligatoriamente un numero')

], Conversion.eliminarConversion)


module.exports = router
