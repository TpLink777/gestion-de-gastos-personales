
import React, { useState, useEffect } from 'react'
import { ValidacionDeCampos } from '../helpers/validacionDeCampos'

export const useDatosPersonsale = ({ datos, actualizar, siguiente }) => {

    const [data, setData] = useState(datos)
    const [errores, setErrores] = useState({
        nombre: '',
        apellido: '',
        monedaBase: ''
    })

    const onChengeInputs = ({ target }) => {
        const { name, value } = target

        setData({
            ...data,
            [name]: value
        })

        setErrores({
            ...errores,
            [name]: ValidacionDeCampos(name, value)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const nombreError = ValidacionDeCampos('nombre', data.nombre)
        const apellidoError = ValidacionDeCampos('apellido', data.apellido)
        const divisaError = ValidacionDeCampos('monedaBase', data.monedaBase)

        setErrores({
            nombre: nombreError,
            apellido: apellidoError,
            monedaBase: divisaError
        })

        if (nombreError || apellidoError || divisaError) {
            console.log('Todos los campos están vacíos');
            return;
        }
        else {
            actualizar(data);
            siguiente();
        }
    }

    useEffect(() => {

        document.title = 'Datos personales';

    }, [])

    useEffect(() => {

        localStorage.setItem('datosPersonales', JSON.stringify(data));

    }, [data]);


    return {
        onChengeInputs,
        data,
        onSubmit,
        errores
    }
}

