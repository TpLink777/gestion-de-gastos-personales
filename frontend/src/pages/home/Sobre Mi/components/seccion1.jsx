import React from 'react'
import { Heart, Lightbulb, Shield } from 'lucide-react';


export const Seccion1_ = () => {
    return (
        <>
            <section className='flex justify-center m-4 sm:m-6 md:m-8 lg:m-12'>
                <div className='flex justify-center items-center flex-col gap-4 p-2 sm:p-4'>

                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center text-white font-bold px-4'>Hola, esto te podia interesar sobre mi!</h1>

                    <div className='bg-white w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl p-4 sm:p-6 m-2 sm:m-4 md:m-6 rounded-2xl hover:scale-105 transition-transform duration-300 hover:-translate-y-2'>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6'>

                            <div className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-90 rounded-xl flex-shrink-0'>
                                <img src="/img/yoo.jpg" alt="imagen personal" className="w-full h-full object-cover rounded-xl" />
                            </div>

                            <div className='flex flex-col justify-center gap-2 px-2 sm:px-4'>
                                <h2 className='text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center p-2 sm:p-4 font-bold'>Un poco sobre mi!</h2>
                                <p className='text-gray-600 text-sm sm:text-base md:text-lg text-justify font-semibold'>Mi nombre es Stiven Gomez Mazo, actualmente soy un estudiante de analisis y desarrollo de software apasionado por construir ideas increibles, y plasmar problemas en soluciones impecables.</p>
                            </div>

                        </div>
                    </div>

                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white m-8 sm:m-12 md:m-16 lg:m-24 px-4">¿Qué me define?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">

                            <div className="group relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-l-8 border-red-500 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">

                                <div className="relative z-10">
                                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                        <div className="p-2 sm:p-3 bg-gray-100 rounded-full group-hover:bg-white transition-colors duration-300">
                                            <Heart className='text-red-500 w-5 h-5 sm:w-6 sm:h-6' />
                                        </div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                            Creatividad
                                        </h2>
                                    </div>
                                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Ideas que marcan la diferencia.
                                    </p>
                                </div>
                            </div>

                            <div className="group relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border-l-8 border-yellow-500 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">

                                <div className="relative z-10">
                                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                        <div className="p-2 sm:p-3 bg-gray-100 rounded-full group-hover:bg-white transition-colors duration-300">
                                            <Lightbulb className='text-yellow-500 w-5 h-5 sm:w-6 sm:h-6' />
                                        </div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                            Compromiso
                                        </h2>
                                    </div>
                                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Siempre al 100% en cada proyecto.
                                    </p>
                                </div>
                            </div>

                            <div className="group relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border-l-8 border-blue-500 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">

                                <div className="relative z-10">
                                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                        <div className="p-2 sm:p-3 bg-gray-100 rounded-full group-hover:bg-white transition-colors duration-300">
                                            <Shield className='text-blue-500 w-5 h-5 sm:w-6 sm:h-6' />
                                        </div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                            Responsabilidad
                                        </h2>
                                    </div>
                                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Cumplo lo que prometo, cuando lo prometo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

