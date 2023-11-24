import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../../utils/AppContext";
import List from "./List";

import { getCategories, addRecipe } from "../../utils/FakeData";

function PublishRecipeForm() {
    const {user} = useGlobalContext()
    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    const [recipe, setRecipe] = useState({
        name: "",
        image: "",
        category: "",
        author: user,
        duration: "",
        description: "",
        tags: [],
        ingredients: [],
        steps: [],
    });

    useEffect(() => {
        setCategories(getCategories());
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;

        setRecipe({
            ...recipe,
            [name]: value,
        });
    };

    const publishRecipe = (e) => {
        e.preventDefault()
        addRecipe(recipe)
        navigate("/recipes")
    }

    return (
        <div className="mt-6 primary bg-base-200">
            <div className=" px-10 py-6 mx-auto w-full">
                <form className="w-full px-10 py-6 bg-base-200 flex justify-evenly gap-10" onSubmit={publishRecipe}>
                    <div className="left w-1/2">
                        <div className="mt-4">
                            <label className="block font-bold">
                                Nombre Receta
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Ingresa el nombre de la receta"
                                className="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                autoFocus
                                autoComplete="on"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block font-bold">
                                Imagen Receta
                            </label>
                            <input
                                type="text"
                                name="image"
                                id="image"
                                placeholder="Ingresa un enlace"
                                className="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                autoFocus
                                autoComplete="on"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block font-bold">Categoría</label>
                            <select
                                name="category"
                                id="category"
                                className="select w-full px-4 py-3 rounded-lg mt-2 border"
                                onChange={handleChange}
                            >
                                {categories.map((category, index) => {
                                    return (
                                        <option value={category} key={index}>
                                            {category}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="mt-4">
                            <label className="block font-bold">
                                Duración en minutos
                            </label>
                            <input
                                type="number"
                                min={0}
                                name="duration"
                                id="duration"
                                placeholder="Ingresa la duración de preparación"
                                className="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                autoFocus
                                autoComplete="on"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block font-bold">Tags</label>
                            <List
                                list={recipe.tags}
                                recipe={recipe}
                                setRecipe={setRecipe}
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block font-bold">
                                Descripción
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                cols="30"
                                rows="10"
                                className="resize-none w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>

                    <div className="right w-1/2">
                        <div className="max-w-4xl px-2 mx-auto text-2xl bg-base-100">
                            <div className="mt-2 p-8 text-xl">
                                <h2 className="text-3xl font-bold py-4">
                                    Ingredientes:
                                </h2>
                                <List
                                    list={recipe.ingredients}
                                    recipe={recipe}
                                    setRecipe={setRecipe}
                                />

                                <h2 className="text-3xl font-bold pt-6 pb-4">
                                    Preparación:
                                </h2>
                                <List
                                    list={recipe.steps}
                                    recipe={recipe}
                                    setRecipe={setRecipe}
                                />
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="btn btn-secondary mb-6 w-11/12">
                                    Publicar Receta
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PublishRecipeForm;
