import React from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const Show = ({items, remove}) => {
    
    const deleteOneItem = (id) => {
        axios.delete("http://localhost:8000/api/grocery/item/" + id)
            .then(res=> console.log(items))
            .catch(err => console.log(err))
    }

    // const [purchaseState, setPurchaseState] = useState(true)
    
    // const 
    return(
        
        // <div className="List">
        //     <h3>{items.name}</h3>
        //     {items.list.map((item, i) =>
        //     <li key ={i}>
        //         {item.ingredient} 
                
        //         <button type="submit" className="btn btn-primary btn-sm ml-4 mt-1" onClick={() => {deleteOneItem(item._id)}}>Purchased</button>
        //     </li>
        //     )}    
        // </div>
        [
            'Light',
          ].map((variant, idx) => (
            <>
              <Card
                bg={variant.toLowerCase()}
                key={idx}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '15rem' }, {align: 'center'}}
              >
                <Card.Header>{items.name}</Card.Header>
                <Card.Body>
                  <Card.Title>I need:</Card.Title>
                  <Card.Text>
                  {items.list.map((item, i) =>
                    <li key ={i}>
                        {item.ingredient} 
                
                        <button type="submit" className="btn btn-primary btn-sm ml-4 mt-1" onClick={() => {deleteOneItem(item._id)}}>Purchased</button>
                    </li>
                    )} 
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </>
          ))
    )
    
}

export default Show