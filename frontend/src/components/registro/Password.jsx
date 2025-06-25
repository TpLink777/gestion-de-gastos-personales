//aca quiero incluir un medidior de [password para que se tenga mas seguridad

import React from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react';
import { usePassword } from '../../hooks/usePassword'

export const Password = ({ datos, actualizar }) => {

    const { showPass1, showPassword1, showPass2, showPassword2, onChengeInputs, data, errores, onSubmit } = usePassword({ datos, actualizar })
    const { pass1, pass2 } = data


    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md">

                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-black rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">
                            contraseña
                        </h2>
                        <p className="text-white/70 text-sm">
                            Ingresa una contraseña para terminar
                        </p>
                    </div>


                    <form className="space-y-6" onSubmit={onSubmit}>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-white/90">
                                Contraseña
                            </label>

                            <div className="relative">
                                <input
                                    type={showPass1 ? "text" : "password"}
                                    name="pass1"
                                    className="w-full px-4 py-3 pr-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition duration-300"
                                    value={pass1}
                                    onChange={onChengeInputs}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />

                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 w-10 flex items-center justify-center text-white/60 hover:text-white/90 transition-colors duration-200"
                                    onClick={showPassword1}
                                >
                                    {showPass1 ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>

                            {errores.pass1 && (
                                <div className="text-gray-100 bg-red-500/20 px-3 py-2 rounded-lg text-sm border border-red-300/30">
                                    {errores.pass1}
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-white/90">
                                Confirmacion de Contraseña
                            </label>

                            <div className="relative">
                                <input
                                    type={showPass2 ? "text" : "password"}
                                    name="pass2"
                                    className="w-full px-4 py-3 pr-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition duration-300"
                                    value={pass2}
                                    onChange={onChengeInputs}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />

                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 w-10 flex items-center justify-center text-white/60 hover:text-white/90 transition-colors duration-200"
                                    onClick={showPassword2}
                                >
                                    {showPass2 ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>

                            {errores.pass2 && (
                                <div className="text-gray-100 bg-red-500/20 px-3 py-2 rounded-lg text-sm border border-red-300/30">
                                    {errores.pass2}
                                </div>
                            )}
                        </div>


                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full relative overflow-hidden bg-gradient-to-r from-pink-500 to-black hover:from-pink-600 hover:to-black text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-[0_20px_20px_-12px_rgba(255,_255,_255,_0.7)] transform hover:scale-[1.02] transition-all duration-300 ease-out group"
                            >
                                Crear cuenta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


