import React from 'react'
import { Sprout, Wallet, Eye, Settings } from 'lucide-react'

export const Seccion2 = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12">

                <h1 className='text-4xl font-bold text-center mb-20 text-transparent bg-gradient-to-b to-pink-400  from-pink-600 bg-clip-text'>Visualiza un futuro financiero más claro</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">

                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 border border-gray-100 group">
                        <div className="flex items-center justify-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 group-hover:from-pink-100 group-hover:to-pink-200 transition-all duration-300">
                            <div className="text-pink-600 group-hover:scale-110 transition-transform duration-300">
                                <Sprout size={50} />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Planifica</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Planifica tus gastos de manera eficiente y organizada
                            </p>
                            <button
                                className="w-full bg-gradient-to-r from-pink-300 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                                type="button"
                            >
                                Comenzar a planificar
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 border border-gray-100 group">
                        <div className="flex items-center justify-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 group-hover:from-pink-100 group-hover:to-pink-200 transition-all duration-300">
                            <div className="text-pink-600 group-hover:scale-110 transition-transform duration-300">
                                <Eye size={50} />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Visualiza</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Visualiza tus finanzas de forma clara y sencilla
                            </p>
                            <button
                                className="w-full bg-gradient-to-r from-pink-300 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                                type="button"
                            >
                                Ver Finanzas
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 border border-gray-100 group">
                        <div className="flex items-center justify-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 group-hover:from-pink-100 group-hover:to-pink-200 transition-all duration-300">
                            <div className="text-pink-600 group-hover:scale-110 transition-transform duration-300">
                                <Settings size={50} />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Controla</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Mantén el control total sobre tus gastos diarios
                            </p>
                            <button
                                className="w-full bg-gradient-to-r from-pink-300 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                                type="button"
                            >
                                Controlar
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 border border-gray-100 group">
                        <div className="flex items-center justify-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 group-hover:from-pink-100 group-hover:to-pink-200 transition-all duration-300">
                            <div className="text-pink-600 group-hover:scale-110 transition-transform duration-300">
                                <Wallet size={50} />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Ahorra</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Establece metas de ahorro y cumple tus objetivos
                            </p>
                            <button
                                className="w-full bg-gradient-to-r from-pink-300 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                                type="button"
                            >
                                Ahorrar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

