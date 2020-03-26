import React, { Component } from 'react'

import ListForm from "./ListForm"
import Recipes from "./Recipes"

const API_KEY ="a416d2bf9ec645d0b3ea10e602bce75c"

class RecipeWrapper extends Component {

        state = {
            recipes: []
        }
    
    
    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;

        e.preventDefault () ;
        const api_call = await fetch (
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${recipeName}&number=3&apiKey=${API_KEY}`
        )
        const data = await api_call.json();
        console.log("DATA from API: ", data)
        this.setState({ recipes: data});
        console.log(this.state.recipes)
        console.log(recipeName)
    }

    render() {
        return (
            <div className="RecipeWrapper">
                <header className="App-header">
                    <h1 className="App-title"> Recipe Search</h1>
                </header>
                <ListForm getRecipe={this.getRecipe}/>
                <Recipes recipes={this.state.recipes}/>
            </div>
        )
    }
}

export default RecipeWrapper