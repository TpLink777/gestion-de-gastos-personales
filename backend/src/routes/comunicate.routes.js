const express = require('express')
const router = express.Router()

const { body } = require('express-validator')

const ComunicateConmigo = require('../controllers/comunicateConmigo.controller')

router.post('/comunicateConmigo', [
    body('correo').notEmpty().isEmail().withMessage('El correo electrónico es obligatorio y debe ser válido.'),
    body('nombre').notEmpty().isString().withMessage('El nombre es obligatorio.'),
    body('mensaje').notEmpty().isString().withMessage('El mensaje es obligatorio.')
], ComunicateConmigo.comunicateConmigo)

module.exports = router