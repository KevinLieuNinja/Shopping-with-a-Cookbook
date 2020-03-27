import React from "react";
import { Link } from "@reach/router"

const Recipes = props => (
    <div className="container">
        <div className="row">
        { props.recipes.map((recipe)=> {
        return (
            <div key={recipe.title} className="col-md-4" style={{ marginBottom:'2rem' }}>
                <div className="recipe__box">
                    <img className="recipe__box-img" src={recipe.image} alt={recipe.title}/>
                    <div className="recipe__text">
                        <h4>{ recipe.title }</h4>
                        <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
                    </div>
                </div>
            </div>
            )
        })}
        </div>
    </div>
)

export default Recipes;
