import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Seccion1 = () => {

    const scrollToBottom = () => {
        window.scrollBy({ top: 900, behavior: 'smooth' });
    };

    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-6xl w-full">

                    <div className="flex justify-center order-2 md:order-1">
                        <img
                            className="w-full max-w-md"
                            src="/img/imagen_principal.avif"
                            alt="Calendario con dinero"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center md:items-start max-w-lg text-center md:text-left order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-pink-600 to-pink-300 bg-clip-text text-transparent mb-6">
                            Organiza y controla tus gastos sin complicaciones.
                        </h2>

                        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
                            Administra tus finanzas de forma simple, ágil y eficiente, llevando un control claro de tus ingresos, egresos y ahorros en un solo lugar.
                        </p>


                        <Link to="/login">
                            <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse" >
                                Comenzar ahora
                            </button>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={scrollToBottom}
                    aria-label="Desplazarse hacia abajo"
                    className="mt-12 flex justify-center items-center animate-bounce hover:scale-110 cursor-pointer text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] rounded-full p-2"
                >
                    <ChevronDown size={40} />
                </button>
            </section>
        </>
    )
}


