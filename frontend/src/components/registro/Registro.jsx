// aqui hare que todo funcione de manera correcta

import React, { useState, useEffect } from 'react'
import { Password } from './password'
import { Codigo } from './codigo'
import { Correo } from './correo'
import { DatosPersonales } from './datosPersonales'

export const Registro = () => {

    const saved = localStorage.getItem('datosPersonales');
    const savedPaso = localStorage.getItem('Paso actual');

    const [paso, setPaso] = useState(savedPaso ? parseInt(savedPaso) : 1);

    const initialData = saved ? JSON.parse(saved) : {
        nombre: '',
        apellido: '',
        monedaBase: '',
        correo: '',
        codigo: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialData);

    const avanzarPaso = () => setPaso((prev) => prev + 1);
    const retrocederPaso = () => setPaso((prev) => prev - 1);

    const actualizarDatos = (nuevosDatos) => {
        setFormData((prevData) => ({ ...prevData, ...nuevosDatos }));
    };

    useEffect(() => {

        localStorage.setItem('Paso actual', paso)

    }, [paso])


    return (
        <>
            {paso === 1 && (
                <DatosPersonales
                    datos={formData}
                    actualizar={actualizarDatos}
                    siguiente={avanzarPaso}
                />
            )}
            {paso === 2 && (
                <Correo
                    datos={formData}
                    actualizar={actualizarDatos}
                    siguiente={avanzarPaso}
                    anterior={retrocederPaso}
                />
            )}
            {paso === 3 && (
                <Codigo
                    datos={formData}
                    actualizar={actualizarDatos}
                    siguiente={avanzarPaso}

                    anterior={retrocederPaso}
                />
            )}
            {paso === 4 && (
                <Password
                    datos={formData}
                    actualizar={actualizarDatos}
                />
            )}
        </>
    )
}


