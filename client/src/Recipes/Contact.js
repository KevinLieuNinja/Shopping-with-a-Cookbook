import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

function Contact() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">GrocerRecipe</h1>
                <p className="lead">Thank you for using GrocerRecipe. We are two guys who wanted to create an app that will let you make your grocery list and get inspiration to make delicious meals.</p>
                <hr className="my-2"/>
                <p>Built entirely in React, we've used the Spoonacular API to cull recipes for ingredients you input into the recipe search bar. Bon appetit!</p>
                <p className="lead">
                    <Button color="success">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Contact
