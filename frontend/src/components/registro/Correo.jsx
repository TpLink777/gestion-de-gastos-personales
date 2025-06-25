// aqui el usuario pondra su correo y sera validado

import React from 'react'
import { useCorreo } from '../../hooks/useCorreo'

export const Correo = ({ datos, actualizar, siguiente, anterior }) => {

    const { onChangeInputs, data, onSubmit, errores } = useCorreo({ datos, actualizar, siguiente, anterior })

    const { correo } = data

    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4 ">
                <div className="relative">

                    <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-6 -right-6 w-28 h-28rounded-full blur-xl opacity-15 animate-pulse delay-1000"></div>

                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] w-full max-w-lg">

                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-black rounded-2xl mb-6 shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold text-center text-white drop-shadow-lg mb-3">
                                Sigue con el proceso
                            </h2>
                            <p className="text-white/70 text-lg">
                                Completa tu información para continuar
                            </p>
                        </div>

                        <form action="" onSubmit={onSubmit}>
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <label className="block text-lg font-medium text-white/90 mb-2">
                                        Email
                                    </label>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            name="correo"
                                            value={correo}
                                            onChange={onChangeInputs}
                                            className="w-full px-5 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/25 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-white focus:bg-white/20 transition-all duration-300 text-lg group-hover:border-white/40"
                                            placeholder="Ej. stivengomezmazo7@gmail.com"
                                            autoComplete="email"
                                        />
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>

                                    <div className="h-6">
                                        {errores.correo && (
                                            <div className='text-red-200 bg-red-500/20 px-4 py-2 rounded-xl text-sm border border-red-300/30 backdrop-blur-sm'>
                                                {errores.correo}
                                            </div>)}
                                    </div>
                                </div>


                                <div className="pt-4">
                                    <button
                                        type="button"
                                        onClick={anterior}
                                        className="w-[40%]  mx-5 relative overflow-hidden bg-gradient-to-r from-pink-500 to-black hover:from-pink-600 hover:to-gray-900 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(236,72,153,0.4)] transform hover:scale-[1.02] transition-all duration-300 ease-out group"
                                    >
                                        <span className="relative z-10 text-lg tracking-wide">Volver</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>

                                    <button
                                        type="submit"
                                        className="w-[40%] relative overflow-hidden bg-gradient-to-r from-pink-500 to-black hover:from-pink-600 hover:to-gray-900 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(236,72,153,0.4)] transform hover:scale-[1.02] transition-all duration-300 ease-out group"
                                    >
                                        <span className="relative z-10 text-lg tracking-wide">Siguiente</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
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
                                🔒 Tu información está protegida
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}






