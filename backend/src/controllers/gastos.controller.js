const { Gasto, Usuario, Categoria } = require('../db/index')
const { validationResult } = require('express-validator')

exports.obtenerGastos = async (req, res) => {
    try {

        const obtenerGastos = await Gasto.findAll({
            include: [
                {
                    model: Usuario,
                    attributes: ['nombre', 'correo', 'monedaBase']
                },
                {
                    model: Categoria,
                    attributes: ['nombreCategoria', 'estado']
                }
            ]
        });

        console.log('gastos obtenidos correctamente')
        res.status(200).json({ message: 'gastos con datos de categoria y usuario obtenidos exitosamente.', data: obtenerGastos })

    } catch (err) {

        console.error('ocurrio nun error a la hora de obtener los gastos')
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}

exports.obtenerGastosById = async (req, res) => {
    try {

        const { id } = req.params

        const verificarGasto = await Gasto.findByPk(id, {
            include: [
                {
                    model: Usuario,
                    attributes: ['nombre', 'correo', 'monedaBase']
                },
                {
                    model: Categoria,
                    attributes:
                        ['nombreCategoria', 'estado']
                }
            ]
        })

        if (!verificarGasto) return res.status(400).json({ message: 'gasto no encontrado' })

        console.log(`gastos obtenidos exitosamente por su id ${id}`)
        res.status(200).json({ message: `Gasto con ID ${id} obtenido exitosamente`, data: verificarGasto })


    } catch (err) {

        console.error('ocurrio nun error a la hora de obtener el gasto por su id ')
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}

exports.crearGastos = async (req, res) => {
    try {

        const { usuarioId, categoriaId, monto, moneda, fecha, descripcion, total } = req.body

        const user = await Usuario.findByPk(usuarioId)
        if (!user) return res.status(400).json({ message: 'usuario no encontrado, debes primero crearlo' })

        const categorie = await Categoria.findByPk(categoriaId)
        if (!categorie) return res.status(400).json({ message: 'categoria no encontrado, debes primero crearla' })

        const nuevoGAsto = await Gasto.create({
            usuarioId: user.id,
            categoriaId: categorie.id,
            monto,
            moneda,
            fecha,
            descripcion,
            total
        })

        console.log(`gasto creado de manera exuitosa`, nuevoGAsto)
        res.status(201).json({ message: 'gasto creado de manera exitosa.' })

    } catch (err) {

        console.error('ocurrio nun error a la hora de crear el gasto  ')
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}

exports.actualizarGastos = async (req, res) => {
    try {

        const { id } = req.params

        const verificarGasto = await Gasto.findByPk(id)

        if (!verificarGasto) return res.status(400).json({ message: 'gasto no encontrado' })

        const { monto, moneda, fecha, descripcion, total } = req.body

        const objectGAstos = {}

        if (monto != undefined) objectGAstos.monto = monto
        if (moneda != undefined) objectGAstos.moneda = moneda
        if (fecha != undefined) objectGAstos.fecha = fecha
        if (descripcion != undefined) objectGAstos.descripcion = descripcion
        if (total != undefined) objectGAstos.total = total

        await Gasto.update(objectGAstos, { where: { id } })

        console.log(`gasto con id ${id} actualizado de manera exitosa`)
        res.status(200).json({ message: 'gasto actualizado de manera exitosa' })

    } catch (err) {

        console.error('ocurrio nun error a la hora de actualizar el gasto por su id ')
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}

exports.eliminarGastos = async (req, res) => {
    try {

        const { id } = req.params

        const verificarGasto = await Gasto.findByPk(id)

        if (!verificarGasto) return res.status(400).json({ message: 'gasto no encontrado' })

        await Gasto.destroy({ where: { id } })

        console.log(`gasto con id ${id} eliminado de manera exitosa`)
        res.status(200).json({ message: 'gasto eliminado de manera exitosa' })

    } catch (err) {

        console.error('ocurrio nun error a la hora de eliminar el gasto por su id ')
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}


//consultas para los graficos a presentar

// Consulta 1: Obtener todos los gastos de un usuario específico con detalles de categoría

exports.gastosTotalesPorUsuario = async (req, res) => {
    try {

        const { idUsuario } = req.params

        const gastosTotales = await Gasto.findAll({
            where: {
                usuarioId: idUsuario,
            },
            include: [{
                model: Categoria,
                attributes: ['nombreCategoria', 'estado']
            }],
            order: [['fecha', 'DESC']]
        })

        res.status(200).json({ message: `Gastos del usuario ${idUsuario} obtenidos con éxito`, data: gastosTotales });

    } catch (err) {

        console.error('Error al obtener los gastos por usuario:', err);
        res.status(500).json({ message: 'Error interno del servidor' });

    }
}

// Consulta 2: Calcular el total gastado por usuario en un rango de fechas

exports.totalGastadoPorUsuarioEnRango = async (req, res) => {
    try {

        const { usuarioId } = req.params

        const { fechaInicio, fechaFinal } = req.query

        if (!fechaInicio || !fechaFinal) return res.status(400).json({ message: 'Debes enviar una fecha de inicio y fin' })

        const total = await Gasto.sum({
            where: {
                usuarioId,
                fecha: {
                    [Op.between]: [fechaInicio, fechaFinal]
                }
            }
        })

        res.status(200).json({ message: `Total gastado por el usuario ${usuarioId} entre ${fechaInicio} y ${fechaFinal}`, totalGastado: total || 0 });

    } catch (err) {

        console.error('Error al calcular el total:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Consulta 3: Agrupar gastos por categoría para un usuario (total gastado por categoría)

exports.agruparGastosPorCategoriaParUnUsuario = async (req, res) => {
    try {

        const { idUsuario } = req.params;

        const gastos = await Gasto.findAll({
            where: { usuarioId: idUsuario },
            attributes: [
                'categoriaId',
                [sequelize.fn('SUM', sequelize.col('total')), 'totalGastado']
            ],
            include: [
                {
                    model: Categoria,
                    attributes: ['nombreCategoria']
                }
            ],
            group: ['categoriaId', 'Categoria.id'],
            order: [[sequelize.fn('SUM', sequelize.col('total')), 'DESC']]
        });

        res.status(200).json({
            message: `Total gastado por categoría para el usuario ${idUsuario}`,
            data: gastos
        });


    } catch (err) {

        console.error('Error al agrupar gastos por categoría:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Consulta 4: Últimos gastos realizados por un usuario (ordenados por fecha desc)

exports.ultimosGastosPorUsuario = async (req, res) => {
    try {

        const { usuarioId } = req.params;

        const ultimosGastos = await Gasto.findAll({
            where: { usuarioId },
            include: [
                {
                    model: Categoria,
                    attributes: ['nombreCategoria']
                }
            ],
            order: [['fecha', 'DESC']],
            limit: 10
        });

        res.status(200).json({ message: 'Últimos gastos obtenidos correctamente', data: ultimosGastos });


    } catch (err) {

        console.error('Error al obtener los últimos gastos:', err);
        res.status(500).json({ message: 'Error del servidor al obtener los últimos gastos' });
    }
}
// Consulta 5: Promedio de gasto por categoría para un usuario (útil para gráficos o análisis)

exports.promedioDeGastosPorCategoria = async (req, res) => {
    try {

        const { usuarioId } = req.params;

        const promedioPorCategoria = await Gasto.findAll({
            attributes: [
                'categoriaId',
                [Sequelize.fn('AVG', Sequelize.col('total')), 'promedioGasto']
            ],
            where: { usuarioId },
            group: ['categoriaId'],
            include: [
                {
                    model: Categoria,
                    attributes: ['nombreCategoria']
                }
            ]
        });

        res.status(200).json({ message: 'Promedio de gastos por categoría obtenido con éxito', data: promedioPorCategoria });

    } catch (err) {

        console.error('Error al calcular el promedio por categoría:', err);
        res.status(500).json({ message: 'Error del servidor al obtener el promedio' });

    }
}
// Consulta 6: Filtrar gastos por moneda 

exports.gastosPorMoneda = async (req, res) => {
    try {

        const { moneda } = req.params;

        const gastosFiltrados = await Gasto.findAll({
            where: { moneda },
            include: [
                {
                    model: Usuario,
                    attributes: ['nombre']
                },
                {
                    model: Categoria,
                    attributes: ['nombreCategoria']
                }
            ]
        });

        res.status(200).json({ message: `Gastos filtrados por moneda ${moneda} obtenidos correctamente`, data: gastosFiltrados });


    } catch (err) {

        console.error('Error al filtrar por moneda:', err);
        res.status(500).json({ message: 'Error del servidor al filtrar por moneda' });
    }
}
// Consulta 7: Conteo de gastos por usuario

exports.GastosPorUsuario = async (req, res) => {
    try {

        const conteoPorUsuario = await Gasto.findAll({
            attributes: [
                'usuarioId',
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'totalGastos']
            ],
            group: ['usuarioId'],
            include: [
                {
                    model: Usuario,
                    attributes: ['nombre', 'correo']
                }
            ]
        });

        res.status(200).json({ message: 'Conteo de gastos por usuario obtenido correctamente', data: conteoPorUsuario });


    } catch (err) {

        console.error('Error al obtener el conteo de gastos:', err);
        res.status(500).json({ message: 'Error del servidor al contar los gastos por usuario' });

    }
}