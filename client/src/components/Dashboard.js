import React, { useState } from 'react'
import CreateList from './CreateList'
import AllLists from './AllLists'
import axios from 'axios';
import { navigate } from '@reach/router';

function Dashboard () {

    const [listState, setListState] = useState([]);
    const [nameState, setNameState] = useState("");

    
    const submitHandler = e => {
        e.preventDefault();
        console.log("Submitted")
        axios.post('http://localhost:8000/api/grocery', {
                name: nameState
        }) 
            .then(res => 
                navigate("/grocery/" + res.data._id))
                setListState(res.data._id)
            .catch(err => console.log("Error"))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange = {(e)=>setNameState(e.target.value)}></input>
                <button className="btn btn-success ml-2" type="submit">Submit</button>
            </form>
            <CreateList />
            <AllLists listState={listState} setListState={setListState}/>
        </div>
    )
}

export default Dashboard