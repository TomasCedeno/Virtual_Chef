import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Recipe from "../components/Recipe";
import { useGlobalContext } from "../utils/AppContext";


import recipesImg from "../assets/recipes.jpg";
import ingredientsImg from "../assets/ingredients.jpg"

import {getRecipes} from "../utils/FakeData"

function LandingPage() {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate();
    const { theme } = useGlobalContext();

    useEffect(() => {
        setRecipes(getRecipes())
    }, [])

    return (
        <div data-theme={theme}>
            <Navbar />

            <div className="hero h-96 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        alt="virtualchef"
                        src={recipesImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">
                            Bienvenido a Virtual Chef
                        </h1>
                        <p className="py-6">
                            Bienvenido a la aplicación de recetas definitiva!
                            Descubre nuevas delicias culinarias y comparte tus
                            creaciones en un solo lugar. ¿Listo para cocinar?
                            ¡Empecemos!.
                        </p>
                        <button onClick={() => navigate("/recipes")} className="btn btn-primary">Ver Recetas</button>
                    </div>
                </div>
            </div>

            <h2 className="bg-base-300 text-4xl font-bold pt-8 pl-8">
                Nuevas Recetas
            </h2>

            <div className="recipes-container flex pt-10 pb-4 px-10 overflow-scroll place-items-center bg-base-300">
                {recipes.map((recipe, index) => {
                    return <Recipe recipe={recipe} key={index} />;
                })}
            </div>

            <div className="hero h-96 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
						alt="publish"
                        src={ingredientsImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Comparte tu receta</h1>
                        <p className="py-6">
						¡Comparte tu deliciosa receta con la comunidad! Inspira a otros amantes de la cocina y sé parte de nuestra creciente colección culinaria. ¡Publica tu receta ahora y deja que el mundo disfrute de tu creatividad en la cocina!
                        </p>
                        <button onClick={() => navigate("/publish")} className="btn btn-primary">Publica tu receta</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default LandingPage;
