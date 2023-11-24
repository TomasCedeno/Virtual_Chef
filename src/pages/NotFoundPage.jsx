import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGlobalContext } from "../utils/AppContext";

import { MdCategory, MdHome, MdMenuBook, MdPublish } from "react-icons/md";

function NotFoundPage() {
    const {theme} = useGlobalContext()

    return (
        <div data-theme={theme}>
            <Navbar />

            <div className="flex items-center justify-center min-h-screen primary py-48">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <div className="text-indigo-500 font-bold text-7xl">
                            404
                        </div>

                        <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                            Esta página no existe
                        </div>

                        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                            La página que estás buscando no fue encontrada.
                        </div>
                    </div>

                    <div className="flex flex-col mt-48">
                        <div className="text-gray-400 font-bold uppercase">
                            Continua con
                        </div>

                        <div className="flex flex-col items-stretch mt-5">
                            <div
                                className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
                            >
                                <div className="rounded-xl bg-primary px-3 py-2 md:py-4">
                                    <MdHome size={30}/>
                                </div>

                                <div className="grow flex flex-col pl-5 pt-2">
                                    <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Inicio
                                    </div>

                                    <div
                                        className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                                    >
                                        Todo empieza aquí
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
                            >
                                <div className="rounded-xl bg-primary px-3 py-2 md:py-4">
                                    <MdMenuBook size={30}/>
                                </div>

                                <div className="grow flex flex-col pl-5 pt-2">
                                    <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Recetas
                                    </div>

                                    <div
                                        className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                                    >
                                        Explora recetas
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
                            >
                                <div className="rounded-xl bg-primary px-3 py-2 md:py-4">
                                    <MdCategory size={30}/>
                                </div>

                                <div className="grow flex flex-col pl-5 pt-2">
                                    <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Categorías
                                    </div>

                                    <div
                                        className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                                    >
                                        Filtra por categorías
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
                            >
                                <div className="rounded-xl bg-primary px-3 py-2 md:py-4">
                                    <MdPublish size={30}/>
                                </div>

                                <div className="grow flex flex-col pl-5 pt-2">
                                    <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Publica
                                    </div>

                                    <div
                                        className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                                    >
                                        Crea tu receta y publicala
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default NotFoundPage;
