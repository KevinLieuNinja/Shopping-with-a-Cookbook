import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

function AllLists ({listState, setListState, submitState, setSubmitState}) {

    const deleteGroceryList = (id) => {
        axios.delete('http://localhost:8000/api/grocery/' + id)
            .then(res =>{ 
                setSubmitState(!submitState)
            })
            .catch(err => console.log(err))
    } 
    return (
        <div className="App-header">
            {/* <h2 >All Grocery Lists:</h2>
                {listState.map((list, index) =>(
                    <div key = {index}>
                        <p className="App-header-p"> {list.name}<br/>
                            <button className="btn btn-primary" onClick ={() => navigate(`/grocery/${list._id}`)} >Details</button>
                        </p>
                            <button className = "btn btn-danger" onClick ={(e) => {deleteGroceryList(list._id)}}>
                            Delete
                            </button>
                            <hr/>
                    </div>
                ))} */}

<           table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">List</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {listState.map((list, index)=> 
                    <tr key={index}>
                        <th scope="row">{list.name}</th>
                        <td>
                            <button className="btn btn-primary" onClick ={() => navigate(`/grocery/${list._id}`)} >Details</button>
                            <button className="btn btn-danger ml-2" onClick={() => {deleteGroceryList(list._id)}}>Delete</button>
                        </td>
                    </tr>
                )}

            </tbody>
            </table>


        </div>
    )
} 
export default AllLists