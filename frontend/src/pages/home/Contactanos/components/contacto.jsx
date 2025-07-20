import React from 'react'
import { BookUser } from 'lucide-react';
import { useContactanos } from '../hooks/useContactanos';

export const Contacto = () => {

    const initial = {
        nombre: '',
        correo: '',
        mensaje: ''
    }

    const { data, onChangeInputs, onSubmit, errores } = useContactanos(initial)


    const {
        nombre,
        correo,
        mensaje
    } = data


    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 gap-4 sm:gap-6 md:gap-8">

                <div className="order-1 md:order-1 flex justify-center w-full md:w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <img
                        className="w-full"
                        src="/img/contactanos.png"
                        alt="contacto"
                    />
                </div>

                <div className="order-2 md:order-2 backdrop-blur-lg p-4 sm:p-6 md:p-8 w-full md:w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">

                    <div className="text-center mb-6 sm:mb-8">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-400 to-pink-700 rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg">
                            <BookUser className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg mb-2">
                            Contáctame
                        </h2>
                    </div>

                    <form className="space-y-4 sm:space-y-5 md:space-y-6" onSubmit={onSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="nombre" className="block text-xs sm:text-sm font-medium text-white/90">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeInputs}
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition duration-300 text-sm sm:text-base"
                                placeholder="Nombre"
                            />

                            {errores.nombre && (
                                <div className="text-gray-100 bg-red-500/20 px-3 py-2 rounded-lg text-sm border border-red-300/30">
                                    {errores.nombre}
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-white/90">
                                Email
                            </label>
                            <input
                                type="email"
                                name="correo"
                                value={correo}
                                onChange={onChangeInputs}
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition duration-300 text-sm sm:text-base"
                                placeholder="Email"
                                autoComplete="on"
                            />

                            {errores.correo && (
                                <div className="text-gray-100 bg-red-500/20 px-3 py-2 rounded-lg text-sm border border-red-300/30">
                                    {errores.correo}
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="mensaje" className="block text-xs sm:text-sm font-medium text-white/90">
                                Mensaje
                            </label>
                            <textarea
                                name="mensaje"
                                rows="3"
                                value={mensaje}
                                onChange={onChangeInputs}
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/20 backdrop-blur-sm resize-none border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition duration-300 text-sm sm:text-base min-h-[80px] sm:min-h-[100px]"
                                placeholder="Escribe tu mensaje aquí..."
                                autoComplete="on"
                            />

                            {errores.mensaje && (
                                <div className="text-gray-100 bg-red-500/20 px-3 py-2 rounded-lg text-sm border border-red-300/30">
                                    {errores.mensaje}
                                </div>
                            )}
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="cursor-pointer w-full relative overflow-hidden bg-gradient-to-r from-pink-400 to-pink-700 hover:from-pink-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl shadow-lg hover:shadow-[0_20px_20px_-12px_rgba(255,_255,_255,_0.7)] transform hover:scale-[1.02] transition-all duration-300 ease-out group text-sm sm:text-base "
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


