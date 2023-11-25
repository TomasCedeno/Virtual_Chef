import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import List from "./List";

import { useAuth } from "../../config/AuthContext";
import {db} from "../../config/FirebaseConfig"
import { collection, getDocs, addDoc } from "firebase/firestore"


function PublishRecipeForm() {
    const {user} = useAuth()
    const navigate = useNavigate()
    const categoriesCollectionRef = collection(db, "categories")
    const [categories, setCategories] = useState([]);
    const [recipe, setRecipe] = useState({
        name: "",
        image: "",
        category: "",
        author: user.displayName,
        duration: "",
        description: "",
        tags: [],
        ingredients: [],
        steps: [],
    });

    useEffect(() => {
        const getCategories = async () => {
            const data = await getDocs(categoriesCollectionRef)
            setCategories(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getCategories()
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;

        setRecipe({
            ...recipe,
            [name]: value,
        });
    };

    const publishRecipe = async (e) => {
        e.preventDefault()

        try {
            await addDoc(collection(db, "recipes"), recipe);
            toast.success("Receta publicada con éxito.", {
                duration: 3000,
            });
            setTimeout(() => {
                navigate("/recipes");
            }, 1000);

        } catch (err) {
            console.log(err);
            toast.error(err.message, {
                duration: 3000,
            });
        }

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
                                        <option value={category.name} key={index}>
                                            {category.name}
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

            <Toaster />
        </div>
    );
}

export default PublishRecipeForm;
