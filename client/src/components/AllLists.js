import React, { useState } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

function AllLists ({listState} , {setListState}) {

    const deleteGroceryList = (id) => {
        axios.delete('http://localhost:8000/api/grocery/' + id)
            .then(res => setListState(!listState))
    }
    return (
        <div>
                <h2>All Lists:</h2>
                {listState.map((list, index) =>(
                    <div key = {index}>
                    <p> 
                        <Link to={"/api/grocery/" + list._id}>
                        Detail: {list.name}
                        </Link>
                    </p>
                    <p>  
                        <Link to={"api/grocery/" + list._id + "/edit"}>
                        Update: {list.name}
                        </Link>
                    </p>
                    <button className = "btn btn-danger" onClick ={(e) => {deleteGroceryList(list._id)}}>
                    Delete
                    </button>
                    <hr/>
                    </div>
                ))}
            </div>
    )
} 
export default AllLists