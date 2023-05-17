import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import AuthorList from '../components/AuthorList'
import Create from './Create'
import Update from './Update'


const Dashboard = () => {
    
    const [authors, setAuthors] = useState([])

    const newAuthor = author => {
        setAuthors([...authors, author])
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => setAuthors(res.data.results))
            .catch((err) => console.log(err))
    }, [authors])

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Routes>
                <Route path='/' element={<AuthorList authors={authors}/>}/>
                <Route path='/new' element={<Create initialName="" newAuthor={newAuthor}/>}/>
                <Route path='/edit/:id' element={<Update/>}/>
            </Routes>
        </div>
    )
}

export default Dashboard