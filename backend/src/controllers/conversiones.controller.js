const { Conversion, Usuario } = require('../db/index')
const { validationResult } = require('express-validator')


exports.obtenerConversiones = async (req, res) => {
    try {

        const obtenerConversiones = await Conversion.findAll({
            include: Usuario
        })

        console.log('conversiones obtenidas de manera exitosa')
        res.status(200).json({ message: 'conversiones obtenidas de manera exitosa', data: obtenerConversiones })

    } catch (err) {

        console.error('error al obtener las conversiones ', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}

exports.obtenerConversionesById = async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        const { id } = req.params

        const verificarConversion = await Conversion.findByPk(id, {
            include: Usuario
        })

        if (!verificarConversion) return res.status(400).json({ message: 'no se pudo encontrar la conversion' })

        console.log(`conversion con id ${id} obtenido de manera exitosa`)
        res.status(200).json({ message: 'conversiones obtenidas de manera exitosa', data: verificarConversion })

    } catch (err) {

        console.error('error al obtener la conversion por su id', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}


exports.crearConversion = async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        const { monedaOrigen, monedaDestino, tasa, monedaBase, fecha, usuarioId } = req.body

        const usuarioForConversion = await Usuario.findByPk(usuarioId);

        if (!usuarioForConversion) return res.status(400).json({ message: 'usuario no encontrado, debes ser antes registrado!' })

        const nuevaConversion = await Conversion.create({
            usuarioId: usuarioForConversion.id,
            monedaOrigen,
            monedaDestino,
            tasa,
            monedaBase,
            fecha
        })

        console.log(`conversion con id del usuario ${nuevaConversion.usuarioId} creada exitosamente`)
        res.status(201).json({ message: 'conversion con relacion con el usuario creada correctamente' })

    } catch (err) {

        console.error('error al crear la conversion ', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })

    }
}

exports.actualizarConversiones = async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        const { id } = req.params

        const verificarConversion = await Conversion.findByPk(id)

        if (!verificarConversion) return res.status(400).json({ message: 'conversion no encontrada' })

        const { monedaOrigen, monedaDestino, tasa, monedaBase, fecha } = req.body

        const objectConversiones = {}

        if (monedaOrigen !== undefined) objectConversiones.monedaOrigen = monedaOrigen
        if (monedaDestino !== undefined) objectConversiones.monedaDestino = monedaDestino
        if (tasa !== undefined) objectConversiones.tasa = tasa
        if (monedaBase !== undefined) objectConversiones.monedaBase = monedaBase
        if(fecha !== undefined) objectConversiones.fecha = fecha

        await Conversion.update(objectConversiones, { where:{ id } })

        console.log(`conversion con id ${id} actualizada de manera correcta`)
        res.status(200).json({ message: 'conversion actualizada correcatmente' })

    } catch (err) {

        console.error('error al actualizar la conversion por su id', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })

    }
}

exports.eliminarConversion = async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        const { id } = req.params

        const verificarConversion = await Conversion.findByPk(id)

        if (!verificarConversion) return res.status(400).json({ message: 'conversion no encontrada' })

        await Conversion.destroy({ where:{ id } })   
        
        console.log(`conversion con id ${id} eliminada de manera correcta`)
        res.status(200).json({ message: 'Conversión eliminada correctamente' })
        
    } catch (err) {
        
        console.error('error al eliminar la conversion por su id', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}