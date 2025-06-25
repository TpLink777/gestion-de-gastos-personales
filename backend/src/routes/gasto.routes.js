const express = require('express');
const router = express.Router();
const { body, param, query } = require('express-validator');
const Gasto = require('../controllers/gastos.controller');


const validarIdParam = param('id').isInt().withMessage('El ID debe ser un número entero');
const validarUsuarioId = param('usuarioId').isInt().withMessage('usuarioId debe ser entero');
const validarIdUsuario = param('idUsuario').isInt().withMessage('idUsuario debe ser entero');



router.get('/findll', Gasto.obtenerGastos);


router.get('/findAlyId/:id', validarIdParam, Gasto.obtenerGastosById);


router.post('/create',
    [
        body('usuarioId').isInt().withMessage('usuarioId es requerido y debe ser entero'),
        body('categoriaId').isInt().withMessage('categoriaId es requerido y debe ser entero'),
        body('monto').isFloat().withMessage('monto debe ser un número'),
        body('moneda').isString().notEmpty().withMessage('moneda es requerida'),
        body('fecha').isISO8601().withMessage('fecha debe tener formato válido'),
        body('descripcion').optional().isString(),
        body('total').isFloat().withMessage('total debe ser un número')
    ],
    Gasto.crearGastos
);



router.put('/update/:id',
    [
        validarIdParam,
        body('monto').optional().isFloat().withMessage('monto debe ser número'),
        body('moneda').optional().isString(),
        body('fecha').optional().isISO8601(),
        body('descripcion').optional().isString(),
        body('total').optional().isFloat()
    ],
    Gasto.actualizarGastos
);


router.delete('/delete/:id', validarIdParam, Gasto.eliminarGastos);


//Devuelve el total de gastos de un usuario específico.
router.get('/usuario/:idUsuario', validarIdUsuario, Gasto.gastosTotalesPorUsuario);



//Devuelve el total gastado por un usuario en un rango de fechas
router.get('/rango/:usuarioId',
    [
        validarUsuarioId,
        query('fechaInicio').isISO8601().withMessage('fechaInicio es requerida y debe ser fecha'),
        query('fechaFinal').isISO8601().withMessage('fechaFinal es requerida y debe ser fecha')
    ],
    Gasto.totalGastadoPorUsuarioEnRango
);


//Agrupa y devuelve los gastos de un usuario por categoría.
router.get('/categoria/:idUsuario', validarIdUsuario, Gasto.agruparGastosPorCategoriaParUnUsuario);



//Devuelve los últimos gastos realizados por un usuario.
router.get('/ultimos/:usuarioId', validarUsuarioId, Gasto.ultimosGastosPorUsuario);



//Devuelve el gasto promedio por categoría de un usuario
router.get('/promedio/:usuarioId', validarUsuarioId, Gasto.promedioDeGastosPorCategoria);



// Devuelve los gastos filtrados por tipo de moneda.
router.get('/moneda/:moneda',
    param('moneda').isString().withMessage('moneda es requerida'),
    Gasto.gastosPorMoneda
);



//Devuelve la cantidad total de gastos por cada usuario.
router.get('/conteo/usuarios', Gasto.GastosPorUsuario);


module.exports = router;
