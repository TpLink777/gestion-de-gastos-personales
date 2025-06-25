import { useState, useEffect, useRef } from "react"
import { ValidacionDeCampos } from "../helpers/validacionDeCampos"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export const useLogin = (initial) => {

    const [formRef, setFormRef] = useState(() => {
        const saved = localStorage.getItem('Inicio de seccion');
        return saved ? JSON.parse(saved) : initial;
    })
    const [showPass, setShowPass] = useState(false)
    const [errores, setErrores] = useState({
        correo: '',
        password: ''
    })
    const emailRef = useRef(null)
    const navigate = useNavigate()


    const onChangeInputs = ({ target }) => {

        const { name, value } = target

        setFormRef({
            ...formRef,
            [name]: value
        })

        setErrores({
            ...errores,
            [name]: ValidacionDeCampos(name, value)
        })
    }

    const login = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/usuarios/login',

                {
                    correo: formRef.correo,
                    password: formRef.password

                }, {

                headers: {
                    'Content-Type': 'application/json',
                },
            }
            )


            if (res.status === 200) {

                console.log('Usuario inició sesión correctamente')

                Swal.fire({
                    title: "Inicio de seccion exitoso!",
                    icon: "success",
                    draggable: true
                });
                navigate('/dashboard')
            }


        } catch (err) {

            console.log('Error al iniciar sesión:', err);

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response?.data?.mensaje || "Hubo un error al iniciar sesión",
            });

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const usuarioError = ValidacionDeCampos('correo', formRef.correo)
        const passwordError = ValidacionDeCampos('password', formRef.password)

        setErrores({
            correo: usuarioError,
            password: passwordError
        })

        if (usuarioError || passwordError) return;

        /* importacion de la funcion para iniciar seccion */
        await login()
    }


    const togglePasswordVisibility = () => {
        setShowPass(!showPass);
    };

    useEffect(() => {

        document.title = 'Inicio de seccion'

        if (emailRef.current) {
            emailRef.current.focus()
        }

    }, [])


    useEffect(() => {

        localStorage.setItem('Inicio de seccion', JSON.stringify(formRef))

    }, [formRef])



    return {
        onChangeInputs,
        errores,
        formRef,
        setErrores,
        handleSubmit,
        emailRef,
        togglePasswordVisibility,
        showPass
    }
}




