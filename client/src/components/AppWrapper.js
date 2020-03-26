import React, { useState, useEffect } from 'react';
import Form from "./Form"
import Show from "./Show"
import axios from 'axios'

function AppWrapper  () {

    const [inputState, setInputState] = useState("")
    const [groceryState, setGroceryState] = useState([])
    // const [listState, setListState ] = ({})

    const changeHandler = (event) => {
        setInputState(event.target.value)
    }
    useEffect(()=>{
        axios.get("")
            .then(res => {
                // setListState(res.data)
            })
            .catch(err =>console.log("No call was made", err))
    })

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