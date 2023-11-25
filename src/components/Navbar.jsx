import React, { useEffect, useState } from "react";
import { MdOutlineFoodBank, MdSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { BsLightbulb } from "react-icons/bs";

import { useAuth } from "../config/AuthContext"
import { useGlobalContext } from "../utils/AppContext";
import { Link } from "react-router-dom";

import {db} from "../config/FirebaseConfig"
import { collection, getDocs } from "firebase/firestore"

function Navbar() {
    const { user, logout } = useAuth();
    const { toggleTheme } = useGlobalContext();
    const [categories, setCategories] = useState([]);
    const categoriesCollectionRef = collection(db, "categories")

    useEffect(() => {
        const getCategories = async () => {
            const data = await getDocs(categoriesCollectionRef)
            setCategories(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getCategories()
    }, []);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link
                    to={"/"}
                    className="btn btn-ghost normal-case text-3xl font-bold"
                >
                    <MdOutlineFoodBank size={50} />
                    Virtual Chef
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li>
                        <Link to={"/recipes"}>Todas las recetas</Link>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Categorías</summary>
                            <ul className="p-2 z-40 max-h-80 overflow-y-scroll">
                                {categories.map((category, index) => {
                                    return <li key={index}>
                                        <a href="/#">{category.name}</a>
                                    </li>;
                                })}
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link to="/publish">Publica tu receta</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {user != null ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img alt="user" src={user.image || "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"} />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <div className="gap-5">
                                        <MdSettings size={20} />
                                        Cuenta
                                    </div>
                                    <div
                                        className="gap-5"
                                        onClick={toggleTheme}
                                    >
                                        <BsLightbulb size={20} />
                                        Cambiar Tema
                                    </div>
                                    <Link to="/" className="gap-5" onClick={logout}>
                                        <FiLogOut size={20} />
                                        Cerrar Sesión
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to={"/login"} className="btn mx-5">
                            Iniciar Sesión
                        </Link>

                        <Link to={"/signup"} className="btn mx-5">
                            Registrarse
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
