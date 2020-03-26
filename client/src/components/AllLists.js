import React, { useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

function AllLists ({listState, setListState, submitState, setSubmitState}) {

    const deleteGroceryList = (id) => {
        axios.delete('http://localhost:8000/api/grocery/' + id)
            .then(res =>{ 
                setSubmitState(!submitState)
            })
            .catch(err => console.log(err))
    } 
    return (
        <div>
            <h2>All Grocery Lists:</h2>
                {listState.map((list, index) =>(
                    <div key = {index}>
                        <p> {list.name}<br/>
                            <button className="btn btn-primary" onClick ={() => navigate(`/grocery/${list._id}`)} >Details</button>
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