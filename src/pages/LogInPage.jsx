import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineFoodBank } from "react-icons/md";

import { Toaster, toast } from "react-hot-toast";

import loginBgImg from "../assets/loginBg.jpg";
import { useAuth } from "../config/AuthContext";

function LogInPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { value, name } = e.target;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(user.email, user.password);
            toast.success("Inicio de sesión exitoso.", {
                duration: 3000,
            });
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (err) {
            console.log(err);
            //setErrors(err.message);
            toast.error(err.message, {
                duration: 3000,
            });
        }
    };

    return (
        <div data-theme="autumn">
            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-3/5 h-screen">
                    <img
                        src={loginBgImg}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="bg-white w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-2/5 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
                >
                    <div className="w-full h-fit">
                        <Link
                            to={"/"}
                            className="btn btn-ghost normal-case text-5xl font-bold"
                        >
                            <MdOutlineFoodBank size={70} />
                            Virtual Chef
                        </Link>

                        <h1 className="text-2xl md:text-4xl font-bold leading-tight mt-12">
                            Inicia sesión en tu cuenta
                        </h1>

                        <form className="mt-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Ingresa Correo Electrónico"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    autoFocus
                                    autoComplete="on"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Ingresa Contraseña"
                                    minLength="6"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="text-right mt-2">
                                <Link
                                    to={"/forgot-password"}
                                    className={
                                        "text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                                    }
                                >
                                    Olvidaste tu contraseña?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full block bg-orange-400 hover:bg-orange-600 focus:bg-orange-600 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                            >
                                Iniciar Sesión
                            </button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full" />

                        <p className="mt-8">
                            No tienes una cuenta?{" "}
                            <Link
                                to="/signup"
                                className="text-amber-800 hover:text-amber-900 font-semibold"
                            >
                                Registrarse
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            <Toaster />
        </div>
    );
}

export default LogInPage;
