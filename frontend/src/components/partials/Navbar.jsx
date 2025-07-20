import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LogIn, UserRoundPlus, Menu, X } from 'lucide-react'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/shift-away.css'

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {

        tippy('#register-link', {
            content: 'Registrarse',
            animation: 'shift-away',
            theme: 'light',
            delay: [100, 50],
            arrow: true,
            placement: 'bottom',
        })

        tippy('#login-link', {
            content: 'Iniciar Sesión',
            animation: 'shift-away',
            theme: 'light',
            delay: [100, 50],
            arrow: true,
            placement: 'bottom',
        })

    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <header className="relative shadow-2xl bg-gradient-to-r from-black via-pink-700 to-pink-600 overflow-hidden min-h-[80px] z-50">

            <div className="relative max-w-5xl mx-auto px-6 py-8 flex justify-between items-center z-50">
                <div className="flex items-center gap-3">

                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-700 to-pink-500 rounded-xl animate-spin"></div>
                        <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-500 rounded-xl rotate-12 opacity-70 animate-ping"></div>
                    </div>

                    <h1 className="text-3xl font-black text-white tracking-wider drop-shadow-[white_0_0_15px] hover:scale-110 hover:opacity-80 transition-transform duration-300">
                        Finzoo
                    </h1>
                </div>

                <nav className="hidden min-[800px]:block">
                    <ul className="flex items-center gap-10">
                        <li className="group">
                            <Link
                                to="/"
                                className="relative text-white font-semibold text-lg tracking-wide transition-all duration-300 ease-out hover:scale-110"
                            >
                                Inicio
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-white transition-all duration-300 ease-out group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li className="group">
                            <Link
                                to="/sobre-mi"
                                className="relative text-white font-semibold text-lg tracking-wide transition-all duration-300 ease-out hover:scale-110"
                            >
                                Sobre Mí
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-white transition-all duration-300 ease-out group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li className="group">
                            <Link
                                to="/contacto"
                                className="relative text-white font-semibold text-lg tracking-wide transition-all duration-300 ease-out hover:scale-110"
                            >
                                Contáctame
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-white transition-all duration-300 ease-out group-hover:w-full"></span>
                            </Link>
                        </li>

                        <li className="group">
                            <Link
                                to="/registro"
                                className="relative text-white font-semibold text-lg tracking-wide hover:scale-110 transition-transform duration-300"
                                id="register-link"
                            >
                                <UserRoundPlus size={25} />
                            </Link>
                        </li>

                        <li className="group">
                            <Link
                                to="/login"
                                className="relative text-white font-semibold text-lg tracking-wide hover:scale-110 transition-transform duration-300"
                                id="login-link"
                            >
                                <LogIn size={25} />
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button 
                    onClick={toggleMenu} 
                    className="min-[800px]:hidden z-[60] text-white mt-2 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200 relative"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isOpen ? <X size={35} /> : <Menu size={35} />}
                </button>


                
                <div
                    className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-black shadow-xl z-40 transform transition-transform duration-300 ease-in-out min-[800px]:hidden ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full pt-24 pb-6">
                        <nav className="flex-1 px-6">
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/"
                                        onClick={closeMenu}
                                        className="block px-4 py-3 text-white rounded-lg hover:bg-pink-500/80  hover:text-white transition-colors duration-200 font-medium"
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/servicios"
                                        onClick={closeMenu}
                                        className="block px-4 py-3 text-white rounded-lg hover:bg-pink-500/80 hover:text-white transition-colors duration-200 font-medium"
                                    >
                                        Servicios
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/sobre"
                                        onClick={closeMenu}
                                        className="block px-4 py-3 text-white rounded-lg hover:bg-pink-500/80 hover:text-white transition-colors duration-200 font-medium"
                                    >
                                        Sobre Mí
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contacto"
                                        onClick={closeMenu}
                                        className="block px-4 py-3 text-white rounded-lg hover:bg-pink-500/80 hover:text-white transition-colors duration-200 font-medium"
                                    >
                                        Contáctanos
                                    </Link>
                                </li>
                                <li className="border-t border-gray-500 pt-4 mt-4">
                                    <Link
                                        to="/registro"
                                        onClick={closeMenu}
                                        className="flex items-center gap-3 px-4 py-3 text-white rounded-lg hover:bg-pink-500/80 hover:text-white transition-colors duration-200 font-medium"
                                    >
                                        <UserRoundPlus size={20} />
                                        Registrarse
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        onClick={closeMenu}
                                        className="flex items-center gap-3 px-4 py-3 text-white rounded-lg hover:bg-pink-500/80 hover:text-white transition-colors duration-200 font-medium"
                                    >
                                        <LogIn size={20} />
                                        Iniciar Sesión
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="px-6 pt-6 border-t border-gray-500">
                            <p className="text-gray-200 text-sm text-center">
                                © 2025 Finzoo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60"></div>
        </header>
    )
}