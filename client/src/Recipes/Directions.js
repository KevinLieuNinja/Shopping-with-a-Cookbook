import React, { useEffect, useState } from 'react'
import axios from "axios"
import { navigate } from "@reach/router"

const Directions = ({id}) => {

    const [state, setState] = useState([])

    
    const redirectHandler = () =>{
        navigate(`${state.sourceUrl}`)
    }

    useEffect( ()=> {
        async function printRec(){
            await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=a416d2bf9ec645d0b3ea10e602bce75c`)
            .then(res =>{
                console.log(res)
                setState(res.data)
            })
            .catch(err => console.log(err))
        }
        printRec()
    }, [])

    return (
        <div>
            <h1>This is a link: </h1>
            <button onClick={redirectHandler}>Click for website</button>
        </div>
    )
}

export default Directions;
