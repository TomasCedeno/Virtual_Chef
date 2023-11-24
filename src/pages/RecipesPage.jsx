import React, { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Recipe from "../components/Recipe";
import { useGlobalContext } from "../utils/AppContext";


import { MdSearch } from "react-icons/md";

import { getRecipes, getRecipeText } from "../utils/FakeData";

function RecipesPage() {
    const { theme } = useGlobalContext();
    const [recipes, setRecipes] = useState([]);
    const searchInputRef = useRef();
    const [search, setSearch] = useState("");

    const allRecipes = getRecipes();

    useEffect(() => {
        setRecipes(allRecipes);
    }, []);

    const handleChange = () => {
        setSearch(searchInputRef.current.value);
    };

    useEffect(() => {
        if (search === "") {
            setRecipes(allRecipes);
            return;
        }

        const filteredRecipes = recipes.filter((recipe) =>
            getRecipeText(recipe).includes(search)
        );
        setRecipes(filteredRecipes);
    }, [search]);

    return (
        <div data-theme={theme}>
            <Navbar />

            <div className="search-bar flex justify-center bg-base-300">
                <form className="w-10/12 my-5">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <MdSearch size={30} />
                        </div>
                        <input
                            ref={searchInputRef}
                            onChange={handleChange}
                            type="search"
                            id="default-search"
                            className="block p-4 pl-12 w-full text-sm primary rounded-lg border border-gray-300"
                            placeholder="Filtra por Nombre, Ingredientes, Categoría..."
                            required
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-sm text-white absolute right-2.5 bottom-2.5 "
                        >
                            Buscar
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-base-300 p-10 min-h-screen">
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => {
                        return <Recipe recipe={recipe} key={index} />;
                    })
                ) : (
                    <h1>No se encontraron recetas.</h1>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default RecipesPage;
