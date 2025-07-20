import React from 'react'
import { Atom, GitCompareArrows, Github, Shrimp, Fish, Code, LineSquiggle, Paintbrush, Worm, Languages, Award, BrainCircuit } from 'lucide-react';

export const Seccion2_ = () => {
    return (
        <>
            <section className='flex justify-center m-4 sm:m-6 md:m-8 lg:m-12'>
                <div className='flex justify-center items-center flex-col gap-4 p-2 sm:p-4'>

                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-4xl mt-8 sm:mt-12 md:mt-16 lg:mt-26">

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-4 px-4">Habilidades en construccion</h2>
                        <p className='text-gray-300 text-base sm:text-lg md:text-xl text-justify mb-8 sm:mb-10 md:mb-12 px-4'>Aquí están algunas de las habilidades que eh estado desarrollando durante mi periodos de estudio:</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">

                            <div className="text-center flex flex-col sm:flex-row items-center bg-gradient-to-b from-blue-500 rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:from-blue-600 transition-all duration-300 hover:scale-105">
                                <div className="text-white px-4 sm:px-6 md:px-10 mb-2 sm:mb-0"><Atom size={32} className='sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">React</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-gradient-to-b to-white rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:to-black hover:from-white transition-all duration-300 hover:scale-105">
                                <div className="px-4 sm:px-6 md:px-10 mb-2 sm:mb-0"><Github size={32} className='text-white sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Github</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-gradient-to-b from-emerald-600 rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:from-emerald-700 transition-all duration-300 hover:scale-105">
                                <div className="text-white px-4 sm:px-6 md:px-10 mb-2 sm:mb-0"><Code size={32} className='sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white/80 text-lg sm:text-xl font-bold">Node.js</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-gradient-to-b from-orange-500 rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:from-orange-600 transition-all duration-300 hover:scale-105">
                                <div className="text-white px-4 sm:px-6 md:px-10 mb-2 sm:mb-0"><GitCompareArrows size={32} className='sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Git</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-gradient-to-b from-amber-400 rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:from-amber-500 transition-all duration-300 hover:scale-105">
                                <div className="px-4 sm:px-6 md:px-10 mb-2 sm:mb-0"><LineSquiggle size={32} className='text-white sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Python</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-gradient-to-b from-emerald-600 to-white rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:from-emerald-700 transition-all duration-300 hover:scale-105">
                                <div className="text-white px-4 sm:px-6 md:px-10 mb-2 sm:mb-0"><Worm size={32} className='text-white sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Django</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-gradient-to-b from-blue-400 rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:from-blue-500 transition-all duration-300 hover:scale-105">
                                <div className="text-white px-4 sm:px-6 md:px-10 mb-2 sm:mb-0"><Shrimp size={32} className='sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Docker</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-gradient-to-b from-pink-500 to-white rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:from-pink-600 hover:to-white transition-all duration-300 hover:scale-105">
                                <div className="px-4 sm:px-6 md:px-10 mb-2 sm:mb-0"><Paintbrush size={32} className='text-white sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Tailwind</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-gradient-to-b to-white from-orange-500 rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:from-orange-600 transition-all duration-300 hover:scale-105">
                                <div className="text-white px-4 sm:px-6 md:px-10 mb-2 sm:mb-0"><Fish size={32} className='text-white sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Mysql</p>
                            </div>

                        </div>
                    </div>

                    <div className='w-full max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-4xl mt-16 sm:mt-20 md:mt-28 lg:mt-36'>
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center px-4'>Objetivos & metas</h2>
                        <p className='text-gray-300 text-base sm:text-lg text-justify m-6 sm:m-8 md:m-10 lg:m-12 px-4'>Uno de mis objetivos es seguir creciendo como desarrollador, aprendiendo nuevas tecnologías y contribuyendo a proyectos que marquen la diferencia.</p>

                        <h3 className='text-xl sm:text-2xl font-bold text-white text-center m-8 sm:m-10 md:m-12 lg:m-15 px-4'>Algunas metas a corto plazo</h3>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0'>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-white/20 rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:bg-white/30 transition-all duration-300 hover:scale-105">
                                <div className="text-blue-500 px-4 sm:px-6 md:px-8 mb-2 sm:mb-0"><Languages size={32} className='sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Aprender inglés</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-white/20 rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:bg-white/30 transition-all duration-300 hover:scale-105">
                                <div className="px-4 sm:px-6 md:px-8 mb-2 sm:mb-0"><Award size={32} className='text-yellow-500 sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Acabar mis estudios</p>
                            </div>

                            <div className="text-center flex flex-col sm:flex-row items-center bg-white/20 rounded-2xl p-3 sm:p-4 hover:bg-gradient-to-b hover:bg-white/30 transition-all duration-300 hover:scale-105">
                                <div className="px-4 sm:px-6 md:px-8 mb-2 sm:mb-0"><BrainCircuit size={32} className='text-pink-600 sm:w-10 sm:h-10 md:w-12 md:h-12' /></div>
                                <p className="text-white text-lg sm:text-xl font-bold">Seguir aprendiendo dia tras dia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



