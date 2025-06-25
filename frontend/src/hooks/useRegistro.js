import { useState } from "react"
import { ValidacionDeCampos } from "../helpers/validacionDeCampos"
//import axios from "axios"

export const useLogin = (initial) => {

    const [formRef, setFormRef] = useState(initial)
    const [errores, setErrores] = useState({
        nombre: '',
        apellido: '',
        email: '',
        monedaBase: '',
        password: '',
    })

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


    const handleSubmit = async (e) => {
        e.preventDefault()
        const nombreError = ValidacionDeCampos('email', formRef.nombre)
        const apellidoError = ValidacionDeCampos('password', formRef.apellido)
        const emailError = ValidacionDeCampos('email', formRef.email)
        const monedaBaseError = ValidacionDeCampos('email', formRef.monedaBase)
        const passwordError = ValidacionDeCampos('password', formRef.password)

        setErrores({
            nombre: nombreError,
            apellido: apellidoError,
            email: emailError,
            monedaBase: monedaBaseError,
            password: passwordError
        })

        if (nombreError || apellidoError ||emailError || monedaBaseError|| passwordError) return;
    }



    return {
        onChangeInputs,
        errores,
        ...formRef,
        setErrores,
        handleSubmit
    }
}


