import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineFoodBank } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";

import { useAuth } from "../config/AuthContext";
import loginBgImg from "../assets/loginBg.jpg";

function SignUpPage() {
    const { signup } = useAuth();
    const nameRef = useRef();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
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

        if (!user.name.trim()) {
            nameRef.current.focus();
        }

        try {
            await signup(user.email, user.password, user.name);
            toast.success("Cuenta creada con éxtio.", {
                duration: 3000,
            });
            setTimeout(() => {
                navigate("/");
            }, 3500);

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

                        <hr className="my-6 border-gray-300 w-full" />

                        <h1 className="text-2xl md:text-4xl font-bold leading-tight mt-6">
                            Crea una cuenta
                        </h1>

                        <form className="mt-6" onSubmit={handleSubmit}>
                            <div className="mt-4">
                                <label className="block text-gray-700">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Ingresa Nombre"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    autoFocus
                                    autoComplete="on"
                                    required
                                    onChange={handleChange}
                                    ref={nameRef}
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Ingresa Correo Electrónico"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
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

                            <button
                                type="submit"
                                className="w-full block bg-orange-400 hover:bg-orange-600 focus:bg-orange-600 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                            >
                                Registrarse
                            </button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full" />
                    </div>
                </div>
            </section>

            <Toaster />
        </div>
    );
}

export default SignUpPage;
