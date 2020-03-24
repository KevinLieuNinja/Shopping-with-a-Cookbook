import React, { useState } from 'react';
import Form from "./Form"
import Show from "./Show"

function AppWrapper  () {

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

export default AppWrapper;