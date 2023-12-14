import React, { useRef } from "react";

import { PiBowlFood, PiTrash } from "react-icons/pi";

function List({ list, setRecipe, recipe }) {
    const inputRef = useRef()

    const addItem = () => {
        list.push(inputRef.current.value)
        setRecipe({...recipe})
        inputRef.current.value = ""
    }

    const deleteItem = (index) =>{
        list.splice(index, 1)
        setRecipe({...recipe})
    }

    const handleEnter = (event) => {
        if (event.key == "Enter"){
            addItem()
        }
    }

    return (
        <div className="bg-base-100 rounded-md p-5 my-5">
            <div>
                <div className="flex">
                    <input
                        type="text"
                        id="add"
                        className="block p-3 w-full text-sm primary rounded-l-lg border border-gray-300"
                        placeholder="Agregar..."
                        ref={inputRef}
                        onKeyDown={handleEnter}
                    />
                    <button
                        onClick={addItem}
                        type="button"
                        className="rounded-r-lg bg-primary btn-md text-white font-bold"
                    >
                        Agregar
                    </button>
                </div>

                {list.map((item, index) => {
                    return (
                        <div
                            key={index}
                            id="task"
                            className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent"
                        >
                            <div className="inline-flex items-center space-x-2">
                                <PiBowlFood size={20} />
                                <div className="">{item}</div>
                            </div>
                            <div>
                                <PiTrash
                                    size={35}
                                    className="w-4 h-4 hover:text-primary hover:cursor-pointer"
                                    onClick={() => deleteItem(index)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default List;
