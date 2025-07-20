import React from 'react'

export const Seccion3 = () => {
    return (
        <>

            <section className="flex flex-col items-center justify-center min-h-screen px-4 py-8">

                <h1 className='text-4xl font-bold text-center mb-24 text-transparent bg-gradient-to-b to-pink-300  from-pink-600 bg-clip-text'>Define un futuro financiero ordenado</h1>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-6xl w-full">


                    <div className="flex flex-col justify-center items-center md:items-start max-w-lg text-center md:text-left order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-pink-600 to-white bg-clip-text text-transparent mb-6">
                            Ponle control a a tu vida y organiza tus gastos.
                        </h2>

                        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
                            Administra tu vida de forma simple y eficiente, llevando un control claro de la gestión de tus gastos, y ahorra tiempo y estrés de manera fácil y sencilla.
                        </p>

                    </div>

                    <div className="flex justify-center order-2 md:order-1">
                        <img
                            className="w-full max-w-md"
                            src="/img/imagen_secundaria.webp"
                            alt="Calendario con dinero"
                            loading="lazy"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}


