import React, {useState} from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../config/AuthContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RecoverPasswordPage() {
    const { resetPassword } = useAuth();

    const [user, setUser] = useState({
        email: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(user.email);
            toast.success("Te enviamos un mensaje, por favor revisa tu bandeja de entrada.", {
                duration: 3000,
            });
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            toast.error(error, {
                duration: 3000,
            });
        }
    };

    return (
        <div data-theme="autumn" className="h-screen w-full absolute top-0">
            <Navbar></Navbar>

            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 ">
                <h1 className="text-4xl font-medium">Recuperar Contraseña</h1>
                <p className="text-slate-500">
                    Ingresa tu correo electrónico para recuperar tu contraseña
                </p>

                <form action="" className="my-10">
                    <div className="flex flex-col space-y-5">
                        <label for="email">
                            <p className="font-medium text-slate-700 pb-2">
                                Correo electrónico
                            </p>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Ingresa tu correo electrónico"
                                onChange={handleChange}
                            />
                        </label>

                        <button
                            className="w-full py-3 font-medium text-white bg-primary hover:bg-secondary rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                            onClick={handleSubmit}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                />
                            </svg>

                            <span>Recuperar contraseña</span>
                        </button>
                        <p className="text-center">
                            Aún no tienes cuenta?{" "}
                            <a
                                href="#"
                                className="text-secondary font-medium inline-flex space-x-1 items-center"
                            >
                                <span>Registrate ahora </span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            <Footer />
			<Toaster />
        </div>
    );
}

export default RecoverPasswordPage;
