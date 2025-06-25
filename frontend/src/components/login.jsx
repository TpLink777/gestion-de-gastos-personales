import React from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { Eye, EyeOff, Lock } from 'lucide-react';


export const Login = () => {

    const initial = {
        correo: '',
        password: ''
    }

    const { onChangeInputs, errores, handleSubmit, emailRef, togglePasswordVisibility, showPass, formRef } = useLogin(initial)

    const { correo, password } = formRef

    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md">

                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-black rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">
                            Iniciar Sesión
                        </h2>
                        <p className="text-white/70 text-sm">
                            Accede a tu cuenta para continuar
                        </p>
                    </div>


                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-white/90">
                                Email
                            </label>
                            <input
                                type="email"
                                name="correo"
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition duration-300"
                                value={correo}
                                ref={emailRef}
                                onChange={onChangeInputs}
                                placeholder="Email"
                                autoComplete='on'
                            />
                            {errores.correo && (
                                <div className='text-gray-100 bg-red-500/20 px-3 py-2 rounded-lg text-sm border border-red-300/30'>
                                    {errores.correo}
                                </div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-white/90">
                                Contraseña
                            </label>

                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    className="w-full px-4 py-3 pr-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition duration-300"
                                    value={password}
                                    onChange={onChangeInputs}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />

                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 w-10 flex items-center justify-center text-white/60 hover:text-white/90 transition-colors duration-200"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPass ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>

                            {errores.password && (
                                <div className="text-gray-100 bg-red-500/20 px-3 py-2 rounded-lg text-sm border border-red-300/30">
                                    {errores.password}
                                </div>
                            )}
                        </div>

                        <div className="text-right">
                            <Link
                                to="#"
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>


                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full relative overflow-hidden bg-gradient-to-r from-pink-500 to-black hover:from-pink-600 hover:to-black text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-[0_20px_20px_-12px_rgba(255,_255,_255,_0.7)] transform hover:scale-[1.02] transition-all duration-300 ease-out group"
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 pt-6 border-t border-white/20 ">
                        <p className="text-center text-sm text-white/80 ">
                            ¿No tienes una cuenta?
                            <Link
                                to="/registro"
                                className="text-white font-semibold  decoration-2 underline-offset-2 hover:scale-105 inline-block transition duration-200 ml-3"
                            >
                                Regístrate
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
