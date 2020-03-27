import React from 'react';



const ListForm = ({getRecipe, ingredient}) => {
    return(
        <form onSubmit={getRecipe} style={{ marginBottom:"2rem" }}>
            <input className="form__input" type='text' name="recipeName" defaultValue={ingredient} />

            <button className="form__buttonbtn btn-danger btn-sm ml-4 mt-1">Search</button>
        </form>
    )
};


export default ListForm;