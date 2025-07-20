import React from 'react'
import { Chrono } from 'react-chrono'
import { timelineItems } from '../helpers/TimelineItems'

export const Seccion3_ = () => {
    return (
        <>
            <section className='flex justify-center m-36 '>
                <div className='flex justify-center items-center flex-col gap-4 p-4'>

                    <h2 className='text-center text-3xl text-white font-bold mb-20'>Timeline de mi aprendizaje</h2>

                    <div className="max-w-4xl mx-auto m-6 relative">
                        <div>
                            <Chrono items={timelineItems} mode="VERTICAL_ALTERNATING" theme={{
                                primary: '#fff', // color principal (línea, iconos)
                                secondary: 'none', // color secundario
                                cardBgColor: '#333333', // fondo de las tarjetas
                                cardForeColor: '#000', // texto de las tarjetas
                                titleColor: 'white', // color títulos
                                cardTitleColor: 'white', // color de los títulos de las tarjetas
                                cardSubtitleColor: 'white', // color de los subtítulos de las tarjetas
                            }} />
                        </div>
                    </div>


                    
                </div>
            </section>
        </>
    )
}