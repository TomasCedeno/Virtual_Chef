import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import RecipeDetail from "../components/ViewRecipe/RecipeDetail";
import Footer from "../components/Footer";
import { useGlobalContext } from "../utils/AppContext";

import {getRecipeById} from "../utils/FakeData"
import {db} from "../config/FirebaseConfig"
import { getDoc, doc } from "firebase/firestore"

function ViewRecipePage() {
    const {theme} = useGlobalContext()
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState(getRecipeById(1))

    useEffect(() => {
        const getRecipe = async () => {
            const d = await (getDoc(doc(db, "recipes", recipeId)))
            setRecipe(d.data())
        }

        getRecipe()
    }, [])

    //const recipe = getRecipeById(Number(recipeId));

    return <div data-theme={theme}>
        <Navbar />

        <RecipeDetail recipe={recipe}/>

        <Footer />
    </div>
}

export default ViewRecipePage;
