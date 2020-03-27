import React from 'react'
import axios from 'axios'


import { Card } from 'react-bootstrap'
import { navigate } from '@reach/router'


const Show = ({items, remove}) => {
    
    const deleteOneItem = (id) => {
        axios.delete("http://localhost:8000/api/grocery/item/" + id)
            .then(res=> console.log(items))
            .catch(err => console.log(err))
    }

    // const [purchaseState, setPurchaseState] = useState(true)
    
    // const 
    return(

                <Card
                    style={{ width: '15rem' }, {align: 'center'}}
                >
                    {/* <Card.Header>{items.name}</Card.Header> */}
                    <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>
                   
                        <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Ingredient</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.list.map((item, i)=> 
                            <tr key={i}>
                                <th scope="row">{item.ingredient}</th>
                            <td>
                            <button type="submit" className="btn btn-primary btn-sm ml-4 mt-1" onClick={() => {deleteOneItem(item._id)}}>Purchased</button>
                            <button type="submit" className="btn btn-success btn-sm ml-4 mt-1" onClick={() => navigate(`/grocery/${item.ingredient}/search`)}>Recipes</button>
                            </td>
                            </tr>
                        )}

                        </tbody>
                        </table>
                    </Card.Text>
                    </Card.Body>
                </Card>
    
              
    )
}
export default Show