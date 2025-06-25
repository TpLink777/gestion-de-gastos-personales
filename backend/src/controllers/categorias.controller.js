const { Categoria } = require('../db/index')
const { validationResult } = require('express-validator')


exports.obtenerCategorias = async (req, res) => {
    try {
        
        const categorias = await Categoria.findAll()

        console.log('categorias obtenidas de manera exitosa')
        res.status(200).json({message: 'categorias obtenidas de manera exitosa', data: categorias})

    } catch (err) {

        console.error('error al obtener las categorias', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}

exports.obtenerCategoriasById = async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        const { id } = req.params

        const categorie = await Categoria.findByPk(id)

        if(!categorie) return res.status(400).json({ message: 'error al obtener la categoria por su id' })

        console.log(`categoria con id ${id} obtenida correctamente`)
        res.status(200).json({ message: 'categoria obtenida de manera exitosa', data: categorie})    
        
    } catch (err) {

        console.error('error al obtener la categoria por su id', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}


exports.crearCategorias = async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        
        const { nombreCategoria, iconos, estado } = req.body

        const categoriaDuplicada = await Categoria.findOne({ where:{ nombreCategoria }})

        if(categoriaDuplicada) return res.status(400).json({ message: 'Estea categoria ya se encuentra creada' })
        

        const nuevaCategoria = await Categoria.create({
            nombreCategoria, 
            iconos, 
            estado
        }) 

        console.log(`categoria con nombre ${nuevaCategoria.nombreCategoria} creada exitosamente`)
        res.status(201).json({ mesage: 'categoria creada exitosamente' })

    } catch (err) {

        console.error('error al crear la categoria ', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}

exports.actualizarCategorias = async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        
        const { id } = req.params
        
        const verificarCategoria = await Categoria.findByPk(id)
        
        if(!verificarCategoria) return res.status(400).json({ message: 'Categoria no encontrada' })

        const { nombreCategoria, iconos, estado } = req.body
            
        const objectCategorias = {}
        
        if(nombreCategoria !== undefined) objectCategorias.nombreCategoria = nombreCategoria
        if(iconos !== undefined) objectCategorias.iconos = iconos
        if(estado !== undefined) objectCategorias.estado = estado

        await Categoria.update(objectCategorias, { where: { id } }) 

        console.log(`Categoria con ID ${id} actualizada exitosamente`);
        res.status(200).json({ message: 'Categoria actualizada de manera exitosa' })

    } catch (err) {

        console.error('error al actualizar la categoria ', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
}

exports.eliminarCategoria = async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }


    try {

        const { id } = req.params
        
        const verificarCategoria = await Categoria.findByPk(id)
        
        if(!verificarCategoria) return res.status(400).json({ message: 'Categoria no encontrada' })

        await Categoria.destroy({ where: { id } })
        
        console.log(`Categoria con ID ${id} eliminada exitosamente`);
        res.status(200).json({ message: 'Categoria eliminada de manera exitosa' })
            
    } catch (err) {

        console.error('error al eliminar la categoria ', err)
        res.status(500).json({ message: 'hubo un error en el servidor' })
    }
} 