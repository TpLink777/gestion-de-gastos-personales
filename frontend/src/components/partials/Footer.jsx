import React from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';


export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <footer className="relative bg-gradient-to-r from-black to-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20">

                    <div className="space-y-4 text-center md:text-left">
                        <div>
                            <h1 className="text-2xl font-bold text-white">
                                Finzoo
                            </h1>
                            <p className="text-gray-300 mt-2">
                                Tu herramienta inteligente para la gestión de gastos personales
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start text-sm text-gray-200">
                            <Mail className="w-4 h-4 mr-2" />
                            <span>stivengomezmazo7@gmail.com</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start text-sm text-gray-200">
                            <Phone className="w-4 h-4 mr-2" />
                            <span>+57 323 4447475</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start text-sm text-gray-200">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>Medellin, Colombia</span>
                        </div>
                    </div>

                    <div className="text-center md:text-left lg:text-center">
                        <div>
                            <h4 className="text-sm font-semibold mb-3">Sígueme</h4>
                            <div className="flex space-x-3 justify-center md:justify-start lg:justify-center">
                                <Link to="#" className="text-gray-200 hover:text-blue-400 hover:scale-110 transition-all duration-200">
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link to="#" className="text-gray-200 hover:text-pink-400 hover:scale-110 transition-all duration-200">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                                <Link to="#" className="text-gray-200 hover:text-blue-500 hover:scale-110 transition-all duration-200">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
                    <div className="text-sm text-gray-300">
                        &copy; {new Date().getFullYear()} Finzoo. Todos los derechos reservados.
                    </div>

                    <div className="flex space-x-6 text-sm">
                        <a href="/cookies" className="text-gray-300 hover:text-white transition">
                            Política de Privacidad
                        </a>
                    </div>
                </div>
            </div>

            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 bg-gradient-to-r from-black to-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl z-50 animate-pulse cursor-pointer"
                aria-label="Volver arriba"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>

    )
}


