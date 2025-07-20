import React, { useState, useEffect } from 'react'
import { ValidacionDeCampos } from '../helpers/validacionDeCampos'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useCorreo = ({ datos, actualizar, siguiente }) => {


    const [data, setData] = useState(datos)
    const [errores, setErrores] = useState({
        correo: ''
    })


    const onChangeInputs = ({ target }) => {
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


    const validarEmail = async () => {

        if (!data.correo) {
            console.log('El correo es obligatorio')
            return false
        }

        try {
            const res = await axios.get(`http://localhost:5000/api/usuarios/validarEmail?correo=${data.correo}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (res.data.existe) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: res.data.mensaje || 'Este email ya está registrado',
                    confirmButtonText: 'Aceptar',
                });
                return true
            }

            return false

        } catch (err) {
            console.log('Error al validar el correo', err)
            return false
        }
    }


    const onSubmit = async (e) => {
        e.preventDefault()

        const correoError = ValidacionDeCampos('correo', data.correo)

        setErrores({
            correo: correoError
        })

        if (correoError) {
            console.log('completa los campos')
            return
        }

        const yaExiste = await validarEmail()

        if (yaExiste) return

        try {
            await axios.post('http://localhost:5000/api/validacion/envio-codigo', {
                correo: data.correo
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            Swal.fire({
                title: "Código enviado exitosamente!",
                icon: "success",
                draggable: true
            })

            console.log('Código enviado de manera correcta')

            actualizar(data)
            siguiente()

        } catch (err) {
            console.log('Hubo un error al enviar el código', err)

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error al enviar el código!"
            })
        }
    }



    useEffect(() => {

        document.title = 'Correo Electronico'

    }, [])

    useEffect(() => {

        localStorage.setItem('datosPersonales', JSON.stringify(data))

    }, [data])



    return {
        onChangeInputs,
        data,
        onSubmit,
        errores
    }
}


