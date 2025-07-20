import React from 'react'
import { SquareMousePointer } from 'lucide-react';

export const Seccion4 = () => {
    return (
        <>

            <section className="flex flex-col items-center justify-center min-h-screen px-4 pt-8 pb-90">

                <h1 className='text-4xl font-bold text-center mb-24 text-transparent bg-gradient-to-b to-pink-300  from-pink-600 bg-clip-text'>Define tu confianza con nosotros</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-6xl w-full">

                    <div className="flex justify-center order-2 md:order-1">
                        <img
                            className="w-full max-w-xl"
                            src="/img/imagen_terciaria.webp"
                            alt="Calendario con dinero"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center md:items-start max-w-lg text-center md:text-left order-2 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-pink-600 to-white bg-clip-text text-transparent mb-6">
                            Porque elegirnos?
                        </h2>

                        <ul className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 space-y-4">
                            <li className="flex items-start gap-4">
                                <span className="text-pink-500">
                                    <SquareMousePointer size={24} />
                                </span>
                                Registro rápido y sencillo de tus gastos diarios.
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-pink-500">
                                    <SquareMousePointer size={24} />
                                </span>
                                Gráficos e informes visuales para entender tus gastos.
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-pink-500">
                                    <SquareMousePointer size={24} />
                                </span>
                                Informes detallados para un mejor control.
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-pink-500">
                                    <SquareMousePointer size={24} />
                                </span>
                                Acceso a recursos educativos sobre finanzas.
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-pink-500">
                                    <SquareMousePointer size={24} />
                                </span>
                                Panel de control claro y fácil de usar.
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-pink-500">
                                    <SquareMousePointer size={24} />
                                </span>
                                Actualizaciones constantes de todos tus movimientos.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}