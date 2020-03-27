import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'



const Show = ({items, remove}) => {
    
    const deleteOneItem = (id) => {
        axios.delete("http://localhost:8000/api/grocery/item/" + id)
            .then(res=> console.log(items))
            .catch(err => console.log(err))
    }
    
    return(
        
        <div className="List">
            <h3>{items.name}</h3>
            {items.list.map((item, i) =>
            <li key ={i}>
                {item.ingredient} 
                
                <button type="submit" className="btn btn-primary btn-sm ml-4 mt-1" onClick={() => {deleteOneItem(item._id)}}>Purchased</button>

                <button className="btn btn-success btn-sm ml-4 mt-1" onClick ={() => navigate(`/grocery/${item.ingredient}/search`)} >Recipes</button>
            </li>
            )}    
        </div>
    )
    
}

export default Show