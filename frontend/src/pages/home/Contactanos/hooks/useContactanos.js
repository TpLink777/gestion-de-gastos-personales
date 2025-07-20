import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import JSConfetti from 'js-confetti'
import { ValidacionDeCampos } from '../../../../helpers/validacionDeCampos';

export const useContactanos = (initial) => {

    const [data, setData] = useState(initial)
    const [errores, setErrores] = useState({
        nombre: '',
        correo: '', 
        mensaje: ''
    });

    const jsConfetti = new JSConfetti()

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

    const onSubmit = async (e) => {
        e.preventDefault();

        try {

            Swal.fire({
                title: 'Cargando...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });


            const nombreError = ValidacionDeCampos('nombre', data.nombre);
            const correoError = ValidacionDeCampos('correo', data.correo);  
            const mensajeError = ValidacionDeCampos('mensaje', data.mensaje);

            setErrores({
                nombre: nombreError,
                correo: correoError,
                mensaje: mensajeError
            });

            if (nombreError || correoError || mensajeError) return


            await axios.post(`http://localhost:5000/api/comunicacion/comunicateConmigo`,
                {

                    nombre: data.nombre,
                    correo: data.correo,
                    mensaje: data.mensaje
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado exitosamente!',
                text: 'Tu mensaje ha sido enviado correctamente.',
                confirmButtonText: 'Aceptar'
            }).then(() => {

                jsConfetti.addConfetti({
                    confettiColors: [
                        '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
                    ],
                })

            })

            setData(initial)
            console.log('mensaje enviado exitosamente')

        } catch (err) {
            console.error('Error al enviar el mensaje:', err)
            Swal.fire({
                icon: 'error',
                title: 'Error de conexión',
                text: 'Error al enviar el mensaje'
            })
        }

    }


    return {
        data,
        onChangeInputs,
        onSubmit,
        errores
    }
}




