const express = require('express')
const router = express.Router()

const { body } = require('express-validator')
const ValidarEmail = require('../controllers/validarEmail.controller')


router.post('/envio-codigo', [
    body('correo').notEmpty().isEmail().withMessage('el correo es obligatorio')
], ValidarEmail.envioCodigo)


router.post('/validacion-otp', [
    body('correo').notEmpty().isEmail().withMessage('el correo es obligatorio'),
    body('codigo').notEmpty().isString().withMessage('el codigo de verificacion es obligatorio')
], ValidarEmail.validacion)


module.exports = router