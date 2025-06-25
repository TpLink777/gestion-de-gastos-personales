const { validationResult } = require('express-validator')
const { Usuario } = require('../db/index')
const bcrypt = require('bcrypt')


exports.obtenerUsuarios = async (req, res) => {
    try {

        const usuarios = await Usuario.findAll()

        console.log('usuarios obtenidos exitosamente')
        res.status(200).json({ message: 'Usuarios obtenidos de manera exitosa', data: usuarios })

    } catch (err) {

        console.error('hubo un error a la hora de obtener los usuarios', err)
        res.status(500).json({ message: 'ocurrio un error en el servidor' })
    }
}


exports.obtenerUsuariosById = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        const { id } = req.params

        const user = await Usuario.findByPk(id)

        if (!user) return res.status(400).json({ message: 'Usuario no encontrado' })

        console.log(`usuario con id ${id} encontrado de manera exitosa`)
        res.status(200).json({ message: 'usuario encontrado de manera exitosa', data: user })


    } catch (err) {

        console.error('hubo un error a la hora de obtener el usuario', err)
        res.status(500).json({ message: 'ocurrio un error en el servidor' })
    }
}


// primer parametro 'crearUsuario', el cual su funcion principal es,
// validar que los campos esten correctos y crear el usuario
exports.crearUsuario = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        const { nombre, apellido, correo, codigo, password, monedaBase } = req.body

        const duplicado = await Usuario.findOne({ where: { correo } })

        if (duplicado) return res.status(400).json({ message: 'Este correo ya se encuentra registrado' })


        const passwordEncriptado = await bcrypt.hash(password, 12)
        const nuevoUsuario = await Usuario.create({
            nombre,
            apellido,
            correo,
            codigo,
            password: passwordEncriptado,
            monedaBase
        })

        console.log(`Usuario ${nuevoUsuario.nombre} creado exitosamente`)
        res.status(201).json({ message: 'Usuario creado de manera exitosa' })

    } catch (err) {

        console.error('hubo un error a la hora de crear el usuario', err)
        res.status(500).json({ message: 'ocurrio un error en el servidor' })
    }
}

exports.actualizarUsuario = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        // verificacion de si el usuario existe mediante su id
        const { id } = req.params

        const vefificarUsuario = await Usuario.findByPk(id)

        if (!vefificarUsuario) return res.status(400).json({ message: 'Usuario no encontrado' })

        const { nombre, apellido, correo, password, monedaBase } = req.body

        const datosActualizar = {};

        if (nombre !== undefined) datosActualizar.nombre = nombre
        if (apellido !== undefined) datosActualizar.apellido = apellido
        if (correo !== undefined) datosActualizar.correo = correo
        if (monedaBase !== undefined) datosActualizar.monedaBase = monedaBase
        if (password !== undefined) datosActualizar.password = await bcrypt.hash(password, 12)

        await Usuario.update(datosActualizar, { where: { id } })

        console.log(`Usuario con ID ${id} actualizado exitosamente`);
        res.status(201).json({ message: 'Usuario actualizado de manera exitosa' })

    } catch (err) {

        console.error('hubo un error a la hora de actualizar el usuario', err)
        res.status(500).json({ message: 'ocurrio un error en el servidor' })
    }
}


exports.eliminarUsuario = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        //verificar si el usuario existe antes de eliminarlo
        const { id } = req.params

        const vefificarUsuario = await Usuario.findByPk(id)

        if (!vefificarUsuario) return res.status(400).json({ message: 'Usuario no encontrado' })

        await Usuario.destroy({ where: { id } })

        console.log(`Usuario con ID ${id} eliminado exitosamente`);
        res.status(200).json({ message: 'Usuario eliminado de manera exitosa' })


    } catch (err) {

        console.error('hubo un error a la hora de eliminar el usuario', err)
        res.status(500).json({ message: 'ocurrio un error en el servidor' })
    }
}


exports.validarEmail = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const { correo } = req.query

        const validacion = await Usuario.findOne({ where: { correo } })

        if (validacion) {

            return res.status(200).json({ existe: true, mensaje: 'Este correo ya está registrado.' });

        } else {

            return res.status(200).json({ existe: false, mensaje: 'Este correo no está registrado.' });
        }

    } catch (err) {

        console.error('Error al verificar el correo:', err);
        res.status(500).json({ err: 'No se pudo verificar el correo.' });
    }
}


// inicio de seccion

exports.login = async (req, res) => {

    const errors = validationResult(req) 

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        const { correo, password } = req.body

        const inicioDeSeccion = await Usuario.findOne(
            {
                where: {
                    correo
                }
            })

        if (!inicioDeSeccion) return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' })

        const passwordValida = await bcrypt.compare(password, inicioDeSeccion.password)

        if (!passwordValida) return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });

        console.log('inicio de seccion exitoso')
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso', data: inicioDeSeccion.correo })

    } catch (err) {
        console.log('hubo un error a la hora de iniciar seccion', err)
        res.status(500).json({ message: 'Hubo un error en el servidor', error: err })
    }
}