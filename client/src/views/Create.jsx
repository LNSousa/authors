import axios from 'axios';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const Create = (props) => {

    const navigate = useNavigate()

    const addAuthor = author => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res=>{
                props.newAuthor(res.data.results)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }
    
    return (
        <div>
           <Form onSubmitProp={addAuthor} initialName=''/>
        </div>
    )
}

export default Create