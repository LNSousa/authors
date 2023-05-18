import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import axios from 'axios'


const Update = (props) => {
    const {id} = useParams()
    const [author, setAuthor] = useState()
    const [loaded, setLoaded] = useState(false)
    const [errors, setErr] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data.results);
                setLoaded(true);
            })
        }, [id])
        
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/update/' + id, author)
            .then(res => {
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
            {loaded && (
                <Form  
                    onSubmitProp={updateAuthor}
                    initialName={author.name}
                    errors={errors}
                />
            )}
        </div>
    )
}

export default Update