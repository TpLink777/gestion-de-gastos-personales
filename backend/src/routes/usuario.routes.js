const express = require('express')
const router = express.Router()

const { body, param, query } = require('express-validator')
const Usuario  = require('../controllers/usuario.controller')

//rutas con validaciones en cada uno de los campos requeridos

router.get('/findAll', Usuario.obtenerUsuarios)

router.get('/findById/:id', [
    param('id').isInt().withMessage('el id obligatoriamente dbe ser un numero')
], Usuario.obtenerUsuariosById)

router.post('/create', [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('apellido').notEmpty().withMessage('El apellido es obligatorio'),
    body('correo').isEmail().withMessage('Debe ser un correo válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('codigo').notEmpty().isLength({ min: 6, max: 6  }).withMessage('El código debe tener exactamente 6 caracteres'),
    body('monedaBase').notEmpty().withMessage('La moneda base es obligatoria'),
], Usuario.crearUsuario )

router.put('/update/:id', [

    param('id').isInt().withMessage('el id obligatoriamente dbe ser un numero'),

    body('nombre').optional().isString().withMessage('El nombre debe ser un texto'),
    body('apellido').optional().isString().withMessage('El apellido debe ser un texto'),
    body('correo').optional().isEmail().withMessage('Debe ser un correo válido'),
    body('password').optional().isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('monedaBase').optional().isString().withMessage('La moneda base es obligatoria'),
], Usuario.actualizarUsuario)

router.delete('/delete/:id', [
    param('id').isInt().withMessage('el id obligatoriamente dbe ser un numero')
],Usuario.eliminarUsuario)


router.get('/validarEmail', [
    query('email').isEmail().withMessage('debes ingresar el correo'),

],Usuario.validarEmail)


router.post('/login', [
    body('correo').notEmpty().isEmail().withMessage('el correo es obligatorio'),
    body('password').notEmpty().isString().withMessage('La contraseña es obligatoria')
], Usuario.login)

module.exports = router
