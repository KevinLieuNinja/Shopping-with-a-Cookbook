import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { Router } from '@reach/router'
import Dashboard from './Dashboard'

function AppWrapper  () {
    const [listState, setListState] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/grocery")
            .then(res => setListState(res.data))
            .catch(err => console.log(err))
    }, []);
    
    return(
        <div>
            <Dashboard path="/dashboard" listState={listState} setListState={setListState} />
        </div>
    );
}

export default AppWrapper;