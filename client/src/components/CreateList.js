import React, { useState } from 'react';
import Form from "./Form"
import Show from "./Show"
import axios from 'axios'

function CreateList  () {

    const [inputState, setInputState] = useState("")
    const [groceryState, setGroceryState] = useState([])

    const changeHandler = (event) => {
        setInputState(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setGroceryState([
            ...groceryState,
            [inputState]
        ])
        console.log("Submitted");
        // axios.post('http://localhost:8000/api/grocery', {
        //     ingredient

        // })
        setInputState("")
    }

    const removeGrocery = index => {
        var arr = groceryState.filter((item, i) => i != index)
        setGroceryState(arr)
    }
    return(
        <div>
            <Form changeHandler={changeHandler} submit={submitHandler} inputState={inputState}/>
            <Show items={groceryState} remove={removeGrocery}/>
        </div>
    );
}

export default CreateList;