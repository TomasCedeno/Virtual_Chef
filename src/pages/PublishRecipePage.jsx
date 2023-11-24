import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PublishRecipeForm from "../components/PublishRecipe/PublishRecipeForm";
import { useGlobalContext } from "../utils/AppContext";


function PublishRecipePage() {
    const {theme} = useGlobalContext()

    return <div data-theme={theme}>
        <Navbar />

        <PublishRecipeForm />

        <Footer />
    </div>;
}

export default PublishRecipePage;
