import React, { useState, useEffect } from 'react'
import CreateList from './CreateList'
import AllLists from './AllLists'
import axios from 'axios';
import { navigate } from '@reach/router';

function Dashboard () {

    const [listState, setListState] = useState([]);
    const [nameState, setNameState] = useState("");
    const [submitState, setSubmitState] = useState(false)

    
    const submitHandler = e => {
        e.preventDefault();
        console.log("Submitted")
        axios.post('http://localhost:8000/api/grocery', {
                name: nameState
        }) 
            .then(res =>
                navigate("/grocery/" + res.data._id))
                
            .catch(err => console.log("Error"))
    }

    useEffect(()=> {
        axios.get('http://localhost:8000/api/grocery')
            .then(res =>{
                setListState(res.data)
            })
            .catch(err => console.log(err))
    }, [submitState])

    return (
        <div>
            <h1>Create a new Grocery List</h1>
            <form onSubmit={submitHandler}>
                <input placeholder="ex: Trader Joe's Run" onChange = {(e)=>setNameState(e.target.value)}></input>
                <button className="btn btn-success ml-2" type="submit">Submit</button>
            </form>
            {/* <CreateList /> */}
            <AllLists submitState={submitState} setSubmitState={setSubmitState} listState={listState} setListState={setListState}/>
        </div>
    )
}

export default Dashboard