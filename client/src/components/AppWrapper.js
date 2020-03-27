
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Dashboard from './Dashboard'
import RecipeWrapper from '../Recipes/RecipeWrapper';

function AppWrapper  () {
    const [listState, setListState] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/grocery")
            .then(res => setListState(res.data))
            .catch(err => console.log(err))
    }, []);
    
    return(
        <div>
            <Dashboard listState={listState} setListState={setListState} />
            <RecipeWrapper />
        </div>
    );
}

export default AppWrapper;