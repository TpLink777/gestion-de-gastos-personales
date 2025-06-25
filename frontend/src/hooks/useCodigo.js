import React, { useState, useEffect } from 'react'
import { ValidacionDeCampos } from '../helpers/validacionDeCampos'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useCodigo = ({ datos, actualizar, siguiente }) => {


    const [data, setData] = useState(datos)
    const [errores, setErrores] = useState({
        codigo: ''
    })


    const onChangeInputs = ({ target }) => {

        const { name, value } = target

        const regex = /^\d{0,6}$/
        const trimmed = value.trim()

        if (!regex.test(trimmed)) return

        setData({
            ...data,
            [name]: value
        })

        setErrores({
            ...errores,
            [name]: ValidacionDeCampos(name, value)
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const codigoError = ValidacionDeCampos('codigo', data.codigo)

        setErrores({
            codigo: codigoError,
        })

        if (codigoError) return

        try {
            await axios.post('http://localhost:5000/api/validacion/validacion-otp', {
                correo: data.correo,
                codigo: data.codigo
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            Swal.fire({
                title: "Correo verificado exitosamente!",
                icon: "success",
                draggable: true
            })

            console.log('correo verificado exitosamente')

            actualizar(data)
            siguiente()

        } catch (err) {
            console.error("Error al verificar el código", err)

            const mensaje = err.response?.data?.message || "Error al verificar el código."

            setErrores({ codigo: mensaje })

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: mensaje
            })
        }
    }

    useEffect(() => {

        document.title = 'Validacion De Codigo'

    }, [])

    useEffect(() => {
        
        localStorage.setItem('datosPersonales', JSON.stringify(data))

    }, [data])


    return {
        onChangeInputs,
        errores,
        onSubmit,
        data
    }
}



