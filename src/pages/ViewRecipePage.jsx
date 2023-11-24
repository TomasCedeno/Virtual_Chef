import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import RecipeDetail from "../components/ViewRecipe/RecipeDetail";
import Footer from "../components/Footer";
import { useGlobalContext } from "../utils/AppContext";

import {getRecipeById} from "../utils/FakeData"

function ViewRecipePage() {
    const {theme} = useGlobalContext()
    const {recipeId} = useParams()

    const recipe = getRecipeById(Number(recipeId));

    return <div data-theme={theme}>
        <Navbar />

        <RecipeDetail recipe={recipe}/>

        <Footer />
    </div>
}

export default ViewRecipePage;
