import React from 'react'

const Form = ({changeHandler, submit, inputState, items}) => {

    
    return(
        <div>
            <h1>Grocery List</h1>
                <form onSubmit={submit}>
                    <input placeholder="ex. peanut butter" value={inputState} type="text" name="task" onChange={changeHandler}/>
                    <button className="btn btn-success ml-2" type="submit">Add</button>
                </form><br/>
        </div>
    )
}

export default Form
