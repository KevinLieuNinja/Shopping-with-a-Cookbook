import React from 'react'

const Form = ({changeHandler, submit, inputState}) => {

    
    return(
        <div>
            <h1>Grocery List</h1>
                <form onSubmit={submit}>
                    <input value={inputState} type="text" name="task" onChange={changeHandler}/>
                    <button className="btn btn-success ml-2" type="submit">Add</button>
                </form>
        </div>
    )
}

export default Form