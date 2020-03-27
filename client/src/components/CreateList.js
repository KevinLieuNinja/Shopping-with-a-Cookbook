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
    const [submitState, setSubmitState] = useState(false)

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

    useEffect(() => {
        axios.get("http://localhost:8000/api/grocery/" + id)
            .then(res => {
                console.log("LIST: ", res.data)
                setGroceryState(res.data)
            })
            .catch(err => console.log(err))
    },[submitState])

    return(
        <div>
            <Form changeHandler={changeHandler} submit={submitHandler} inputState={inputState}/>
            <Show submitState={submitState} setSubmitState={setSubmitState} items={groceryState} />
        </div>
    );
}

export default CreateList;