import axios from 'axios';
import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const Create = (props) => {

    const navigate = useNavigate()
    const [errors, setErr] = useState([])

    const addAuthor = author => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res=>{
                props.newAuthor(res.data.results)
                navigate('/')
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errArr = []
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErr(errArr)
            })
    }
    
    return (
        <div>
           <Form onSubmitProp={addAuthor} initialName='' errors={errors}/>
        </div>
    )
}

export default Create