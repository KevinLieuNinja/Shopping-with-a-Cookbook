import React from 'react'

const Show = ({items, remove}) => {

    
    
    return(
        
        <div className="List">
            {items.map((item, i) =>
            <li key ={i}>
                {item} 
                {/* <input type="checkbox"></input> */}
                <button type="submit" className="btn btn-danger btn-sm ml-4 mt-1" onClick={() => remove(i)}>Delete</button>
                <button type="submit" className="btn btn-success btn-sm ml-4 mt-1" onClick={() => remove(i)}>Add</button>
            </li>
        )}    
        </div>
    )
    
}

export default Show