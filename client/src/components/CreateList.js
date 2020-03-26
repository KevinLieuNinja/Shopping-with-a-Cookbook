import React, { useState, useEffect } from 'react';
import Form from "./Form"
import Show from "./Show"
import axios from 'axios'

function CreateList  ({id}) {

    const [inputState, setInputState] = useState("")
    const [groceryState, setGroceryState] = useState({
        name:"",
        list:[]
    })

    const changeHandler = (event) => {
        setInputState(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.put("http://localhost:8000/api/grocery/" + id, {ingredient:inputState})
            .then(res => setGroceryState(res.data))
            .catch()
        console.log("Submitted");
        setInputState("")
    }

    // const removeGrocery = (id) => {
    //     axios.delete("http://localhost:8000/api/grocery/item/" + id)
    //         .then(res=> console.log(groceryState))
    //         .catch(err => console.log(err))
    // }

    useEffect(() => {
        axios.get("http://localhost:8000/api/grocery/" + id)
            .then(res => {setGroceryState(res.data)})
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <Form changeHandler={changeHandler} submit={submitHandler} inputState={inputState}/>
            <Show items={groceryState} />
        </div>
    );
}

export default CreateList;