
export const user = {
    name: "María López",
    image: "https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg"
}

export const recipe = {
    id: 1,
    name: "Pollo a la Parmesana",
    image: "https://i.blogs.es/0af230/pollo-parmesana1/1366_2000.jpg",
    description:
        "Una receta clásica italiana que combina pollo tierno con una deliciosa salsa de tomate y queso derretido. ¡Una explosión de sabor en cada bocado!",
    ingredients: [
        "Pechugas de pollo (4 unidades)",
        "Pan rallado (1 taza)",
        "Queso parmesano rallado (1/2 taza)",
        "Salsa de tomate (1 taza)",
        "Mozzarella rallada (1/2 taza)",
        "Aceite de oliva (2 cucharadas)",
        "Sal y pimienta al gusto",
    ],
    steps: [
        "Precalienta el horno a 180°C.",
        "Mezcla el pan rallado y el queso parmesano en un tazón.",
        "Sumerge cada pechuga de pollo en la mezcla de pan rallado y queso, asegurándote de cubrirlas bien.",
        "Calienta el aceite de oliva en una sartén a fuego medio-alto. Cocina las pechugas de pollo hasta que estén doradas por ambos lados.",
        "Coloca las pechugas doradas en una bandeja para horno y cúbrelas con salsa de tomate y mozzarella rallada.",
        "Hornea durante 25-30 minutos o hasta que el queso esté dorado y burbujeante.",
        "Sazona con sal y pimienta al gusto.",
        "Sirve caliente y disfruta.",
    ],
    tags: ["Pollo", "Parmesano", "Italiana", "Horno", "Queso", "Cena"],
    category: "Platos Principales",
    author: "",
    duration: 45,
};

let recipes = [
    {...recipe, id: 1},
    {...recipe, id: 2},
    {...recipe, id: 3},
    {...recipe, id: 4},
    {...recipe, id: 5},
    {...recipe, id: 6},
    {...recipe, id: 7},
]

export const getRecipes = () => {
    return recipes.toReversed()
}

export const getRecipeById = (id) => {
    return recipes.find(recipe => recipe.id === id)
}

export const addRecipe = (recipe) => {
    recipes.push({...recipe, id: recipes.length+1})
}

export const getCategories = () => {
    return [
        "Platos Principales",
        "Postres",
        "Ensaladas",
        "Sopas y Guisos",
        "Desayunos y Brunch",
        "Bebidas y Cócteles",
        "Comida Vegetariana",
        "Comida Vegana",
        "Comida Italiana",
        "Comidas Rápidas",
        "Comida Mexicana",
    ];
};

export const getRecipeText = (recipe) => {
    let text = recipe.name + recipe.description + recipe.category + recipe.author.name
    recipe.ingredients.forEach((ingredient) => {
        text += ingredient
    })
    recipe.steps.forEach((step) => {
        text += step
    })
    recipe.tags.forEach((tag) => {
        text += tag
    })

    return text
}
