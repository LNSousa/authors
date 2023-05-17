import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import axios from 'axios'


const Update = (props) => {
    const {id} = useParams()
    const [author, setAuthor] = useState()
    const [loaded, setLoaded] = useState(false)

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
    }

    return (
        <div>
            {loaded && (
                <Form  
                    onSubmitProp={updateAuthor}
                    initialName={author.name}
                />
            )}
        </div>
    )
}

export default Update