import React from "react";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
    const { id, name, image, author, duration, description, tags } = recipe;

    return (
        <div className="mx-2 transform transition-transform duration-300 hover:-translate-y-5 bg-base-300">
            <div
                tabIndex="0"
                className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
            >
                <div>
                    <img
                        alt="recipe"
                        src={image}
                        tabIndex="0"
                        className="focus:outline-none w-full h-44 rounded-t-lg"
                    />
                </div>
                <div className="primary bg-base-100 rounded-b-lg">
                    <div className="flex items-center justify-between px-4 pt-4">
                        <h2
                            tabIndex="0"
                            className="focus:outline-none text-lg font-semibold"
                        >
                            {name}
                        </h2>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between">
                            <p
                                tabIndex="0"
                                className="focus:outline-none text-xs text-gray-600 pl-1"
                            >
                                por {author.name}
                            </p>

                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                <p
                                    tabIndex="0"
                                    className="focus:outline-none text-xs text-yellow-700"
                                >
                                    {duration} minutos
                                </p>
                            </div>
                        </div>
                        <p
                            tabIndex="0"
                            className="focus:outline-none text-xs text-gray-600 mt-2"
                        >
                            {description}
                        </p>

                        <div className="flex mt-4 overflow-hidden">
                            {tags.map((tag, index) => {
                                return (
                                    <div className="pl-2" key={index}>
                                        <p
                                            tabIndex="0"
                                            className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                                        >
                                            {tag}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex items-center justify-between py-4">
                            <Link to={`/recipe/${id}`} className="btn btn-sm btn-primary">
                                Ver Receta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
