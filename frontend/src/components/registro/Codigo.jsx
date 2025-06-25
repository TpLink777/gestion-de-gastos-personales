// aca el usuario pondra el codigo para validar su correo

import React from 'react'
import { useCodigo } from '../../hooks/useCodigo'

export const Codigo = ({ datos, actualizar, anterior, siguiente }) => {

    const { onChangeInputs, errores, onSubmit, data } = useCodigo({ datos, actualizar, anterior, siguiente })

    const { codigo } = data 

    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="relative">

                    <div className="absolute -top-4 -left-4 w-24 h-24  rounded-full blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32  rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>

                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] w-full max-w-lg">

                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-black rounded-2xl mb-6 shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-3">
                                Vamos, falta poco
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed">
                                Ingresa el código de verificación
                            </p>
                        </div>

                        <form action="" onSubmit={onSubmit}>
                            <div className="space-y-8">
                                <div className="text-center">
                                    <label className="block text-xl font-medium text-white/90 mb-8">
                                        Código de Verificación
                                    </label>

                                    <div className="flex justify-center gap-4 mb-8">
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    name='codigo'
                                                    value={codigo}
                                                    onChange={onChangeInputs}
                                                    maxLength="6"
                                                    className="w-full h-14 text-center text-2xl font-bold bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 focus:shadow-[0_0_20px_white] transition-all duration-300 group-hover:border-white/30"
                                                    placeholder="Ej 123456"
                                                    autoComplete="off"
                                                />
                                            </div>
                                    </div>
                                    <div className="h-6 flex justify-center">
                                        {errores.codigo && (
                                            <div className='text-red-200 w-[320px] text-center  bg-red-500/20 px-4  rounded-xl text-sm border border-red-300/30 backdrop-blur-sm'>
                                                {errores.codigo}
                                            </div>)}
                                    </div>
                                </div>


                                <div className="space-y-4">
                                    <button
                                        type="button"
                                        onClick={anterior}
                                        className="w-[40%] m-5 relative overflow-hidden bg-gradient-to-r from-pink-500 to-black hover:from-pink-600 hover:to-black text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-[0_20px_20px_-12px_rgba(255,_255,_255,_0.7)] transform hover:scale-[1.02] transition-all duration-300 ease-out group"
                                    >
                                        <span className="relative z-10 text-lg">Volver</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-[40%] relative overflow-hidden bg-gradient-to-r from-pink-500 to-black hover:from-pink-600 hover:to-black text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-[0_20px_20px_-12px_rgba(255,_255,_255,_0.7)] transform hover:scale-[1.02] transition-all duration-300 ease-out group"
                                    >
                                        <span className="relative z-10 text-lg">Siguiente</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>


                                    <button
                                        type="submit"
                                        className="w-full text-white/70 hover:scale-105 text-sm font-medium transition-colors duration-200 py-2 cursor-pointer"
                                    >
                                        ¿No recibiste el código? Reenviar
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="mt-10 pt-8 border-t border-white/10">
                            <div className="flex items-center justify-center space-x-2 text-center">
                                <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></div>
                                <p className="text-sm text-white/60 font-medium">
                                    Conexión segura verificada
                                </p>
                            </div>
                            <p className="text-center text-xs text-white/50 mt-3 leading-relaxed">
                                Recuerda colocar el código correcto para continuar
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

