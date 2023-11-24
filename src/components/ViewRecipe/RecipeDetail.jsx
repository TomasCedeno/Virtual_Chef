import React from "react";
import { FiClock } from "react-icons/fi";

function RecipeDetail({ recipe }) {
    const {
        name,
        image,
        category,
        author,
        duration,
        description,
        tags,
        ingredients,
        steps,
    } = recipe;

    return (
        <div className="mt-6 primary bg-base-200">
            <div className=" px-10 py-6 mx-auto w-full">
                <div className="w-full px-10 py-6 bg-base-200 flex justify-evenly gap-10">
                    <div className="left w-1/2">
                        <a
                            href="/#"
                            className="block max-w-2xl transition duration-200 ease-out transform hover:scale-110"
                        >
                            <img
                                alt="recipe"
                                className="object-cover w-full shadow-sm h-full"
                                src={image}
                            />
                        </a>

                        <div className="flex items-center justify-start mt-4 mb-4">
                            <a
                                href="/#"
                                className="px-2 py-1 font-bold bg-primary text-white rounded-lg hover:bg-gray-500"
                            >
                                {category}
                            </a>
                        </div>

                        <div className="mt-2">
                            <a
                                href="/#"
                                className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold "
                            >
                                {name}
                            </a>

                            <div className="flex mt-4 overflow-hidden">
                                {tags.map((tag, index) => {
                                    return (
                                        <div className="pl-2" key={index}>
                                            <p
                                                tabIndex="0"
                                                className="px-2 py-1 font-bold bg-secondary text-white rounded-lg"
                                            >
                                                {tag}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex justify-start items-center mt-4">
                                <FiClock size={30} />
                                <p className="text-md font-bold ml-5">
                                    {duration} minutos
                                </p>
                            </div>

                            <div className="font-light">
                                <a
                                    href="/#"
                                    className="flex items-center mt-6 mb-6"
                                >
                                    <img
                                        src={author.image}
                                        alt="avatar"
                                        className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
                                    />
                                    <h1 className="font-bold hover:underline">
                                        Por {author.name}
                                    </h1>
                                </a>
                            </div>
                        </div>

                        <div className="max-w-4xl px-10  mx-auto text-2xl bg-base-100">
                            <p className="mt-2 p-8">{description}</p>
                        </div>
                    </div>

                    <div className="right w-1/2">
                        <div className="max-w-4xl px-10 mx-auto text-2xl bg-base-100">
                            <div className="mt-2 p-8 text-xl">
                                <h2 className="text-3xl font-bold py-4">Ingredientes:</h2>
                                <ul className="list-disc">
                                {ingredients.map((ingredient, index) => {
                                    return <li className="py-1" key={index}>{ingredient}</li>
                                })}
                                </ul>
                                
                                <h2 className="text-3xl font-bold pt-6 pb-4">Preparación:</h2>
                                <ol className="list-decimal">
                                {steps.map((step, index) => {
                                    return <li className="py-1" key={index}>{step}</li>
                                })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;
