import React from 'react';

const ListForm = props => (
    <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
        <input className="form__input" type='text' name="recipeName"/>
        
        <button className="form__button">Serach</button>
    </form>
);

export default ListForm;