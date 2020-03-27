
import React, { useState, useEffect } from 'react';
// import Form from "./Form"
// import Show from "./Show"
import axios from 'axios'
// import { Router } from '@reach/router'
import Dashboard from './Dashboard'

function AppWrapper  () {
    const [listState, setListState] = useState([])


    // const [inputState, setInputState] = useState("")
    // const [groceryState, setGroceryState] = useState([])
    // const [listState, setListState ] = ({})

    // const changeHandler = (event) => {
    //     setInputState(event.target.value)
    // }

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     setGroceryState([
    //         ...groceryState,
    //         [inputState]
    //     ])
    //     setInputState("")
    // }

    // const removeGrocery = index => {
    //     var arr = groceryState.filter((item, i) => i != index)
    //     setGroceryState(arr)
    // }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/grocery")
            .then(res => setListState(res.data))
            .catch(err => console.log(err))
    }, []);
    
    return(
        <div>
            <Dashboard listState={listState} setListState={setListState} />
        </div>
    );
}

export default AppWrapper;