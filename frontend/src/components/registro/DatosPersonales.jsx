// aqui el usuario pondra su nombre  apellido y su moneda base osea su divisa

import React from 'react'
import { Link } from 'react-router-dom'
import { useDatosPersonsale } from '../../hooks/useDatosPersonsale'

export const DatosPersonales = ({ datos, actualizar, siguiente }) => {

    const { data, onChengeInputs, onSubmit, errores } = useDatosPersonsale({ datos, actualizar, siguiente })

    const { nombre, apellido, monedaBase } = data


    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-32 h-32  rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-6 -right-6 w-28 h-28  rounded-full blur-xl opacity-15 animate-pulse delay-1000"></div>

                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] w-full max-w-lg">

                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-black rounded-2xl mb-6 shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold text-center text-white drop-shadow-lg mb-3">
                                Crear tu Cuenta
                            </h2>
                            <p className="text-white/70 text-lg">
                                Completa la información para comenzar
                            </p>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <label className="block text-lg font-medium text-white/90">
                                        Nombre
                                    </label>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={nombre}
                                            onChange={onChengeInputs}
                                            className="w-full px-5 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/25 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-all duration-300 text-lg group-hover:border-white/40"
                                            placeholder="Ej. Stiven"
                                            autoComplete="given-name"
                                        />
                                    </div>
                                    <div className="h-6">
                                        {errores.nombre && (
                                            <div className='text-red-200 bg-red-500/20 px-4 py-2 rounded-xl text-sm border border-red-300/30 backdrop-blur-sm'>
                                                {errores.nombre}
                                            </div>)}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-lg font-medium text-white/90">
                                        Apellido
                                    </label>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="apellido"
                                            value={apellido}
                                            onChange={onChengeInputs}
                                            className="w-full px-5 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/25 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white  focus:bg-white/20 transition-all duration-300 text-lg group-hover:border-white/40"
                                            placeholder="Ej. Gómez"
                                            autoComplete="family-name"
                                        />
                                    </div>
                                    <div className="h-6">
                                        {errores.apellido && (
                                            <div className='text-red-200 bg-red-500/20 px-4 py-2 rounded-xl text-sm border border-red-300/30 backdrop-blur-sm'>
                                                {errores.apellido}
                                            </div>)}
                                    </div>
                                </div>


                                <div className="space-y-3">
                                    <label className="block text-lg font-medium text-white/90">
                                        Divisa
                                    </label>
                                    <div className="relative group">
                                        <select
                                            name="monedaBase"
                                            value={monedaBase}
                                            className="w-full px-5 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/25 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-all duration-300 appearance-none cursor-pointer text-lg group-hover:border-white/40"
                                            onChange={onChengeInputs}
                                        >
                                            <option value="" className="bg-gray-700 text-white" hidden>
                                                Selecciona una Divisa
                                            </option>
                                            <option value='COP' className="bg-gray-700 text-white">
                                                COP - Peso Colombiano
                                            </option>
                                            <option value='USD' className="bg-gray-700 text-white">
                                                USD - Dólar Americano
                                            </option>
                                            <option value='GBP' className="bg-gray-700 text-white">
                                                GBP - Libra Esterlina
                                            </option>
                                            <option value='EUR' className="bg-gray-700 text-white">
                                                EUR - Euro
                                            </option>
                                            <option value='MXN' className="bg-gray-700 text-white">
                                                MXN - Peso Mexicano
                                            </option>
                                        </select>
                                    </div>
                                    <div className="h-6">
                                        {errores.monedaBase && (
                                            <div className='text-red-200 bg-red-500/20 px-4 py-2 rounded-xl text-sm border border-red-300/30 backdrop-blur-sm'>
                                                {errores.monedaBase}
                                            </div>)}
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        className="w-full relative overflow-hidden bg-gradient-to-r from-pink-500 to-black hover:from-pink-600 hover:to-gray-900 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(236,72,153,0.4)] transform hover:scale-[1.02] transition-all duration-300 ease-out group"
                                    >
                                        <span className="relative z-10 text-lg tracking-wide">Siguiente</span>
                                    </button>
                                    <Link to='/login' className='flex justify-center mt-5 text-gray-200 hover:scale-105'>Iniciar Sesión</Link>
                                </div>
                            </div>
                        </form>
                        <div className="mt-10 pt-8 border-t border-white/20">
                            <div className="flex items-center justify-center space-x-2 mb-3">
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
                            </div>
                            <p className="text-center text-sm text-white/80 tracking-wider leading-relaxed">
                                <span className="font-medium">Nota:</span> Recuerda llenar todos tus datos correctamente
                            </p>
                            <p className="text-center text-xs text-white/60 mt-2">
                                🔒 Información segura y protegida
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


