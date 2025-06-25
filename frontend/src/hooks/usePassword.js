import React, { useState, useEffect } from 'react'
import { ValidacionDeCampos } from '../helpers/validacionDeCampos'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'

export const usePassword = ({ datos, actualizar }) => {

    const [showPass1, setShowPass1] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [data, setData] = useState(datos);
    const navigate = useNavigate();

    const [errores, setErrores] = useState({
        password: ''
    })



    const onChengeInputs = ({ target }) => {
        const { name, value } = target

        if (name === 'pass1' || name === 'pass2') {
            const trimmed = value
            const pass1 = name === 'pass1' ? trimmed : data.pass1 || ''
            const pass2 = name === 'pass2' ? trimmed : data.pass2 || ''

            if (pass1 && pass2 && pass1 !== pass2) {
                setErrores({
                    ...errores,
                    pass2: 'Ambas contraseñas deben ser iguales.'
                });

                setData({
                    ...data,
                    [name]: value
                })
                return;
            }
        }

        setData({
            ...data,
            [name]: value
        })

        setErrores({
            ...errores,
            [name]: ValidacionDeCampos(name, value, {
                pass1: name === 'pass1' ? value : data.pass1,
                pass2: name === 'pass2' ? value : data.pass2
            })
        })
    }


    const Api = async () => {
        try {

            const payload = {
                ...data,
                password: data.pass1,
            };


            await axios.post('http://localhost:5000/api/usuarios/create', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: 'Tu usuario ha sido creado correctamente.',
                confirmButtonText: 'Continuar'
            }).then(() => {

                localStorage.removeItem('datosPersonales');
                localStorage.removeItem('pasoActual');

                navigate('/');
            })

            console.log('usuario creado exitosamente')

        } catch (err) {
            console.error('Error de conexión:', err);
            Swal.fire({
                icon: 'error',
                title: 'Error de conexión',
                text: 'Error al crear la cuenta'
            });
        }
    }


    const onSubmit = (e) => {
        e.preventDefault()

        const pass1Error = ValidacionDeCampos('pass1', data.pass1)
        const pass2Error = ValidacionDeCampos('pass2', data.pass2)

        setErrores({
            pass1: pass1Error,
            pass2: pass2Error
        })

        if (pass1Error || pass2Error) {
            return
        } else {
            actualizar(data)
            Api()
        }
    }


    // visualizar password
    const showPassword1 = () => {
        setShowPass1(!showPass1)
    }

    const showPassword2 = () => {
        setShowPass2(!showPass2)
    }


    useEffect(() => {

        document.title = 'Ingreso de contraseña'

    }, [])


    useEffect(() => {

        localStorage.setItem('datosPersonales', JSON.stringify(data))

    }, [data])


    return {
        showPass1,
        showPassword1,
        showPassword2,
        showPass2,
        onChengeInputs,
        data,
        errores,
        onSubmit
    }
}


