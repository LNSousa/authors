import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AuthorList = (props) => {

    const {authors} = props

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
    }

    return (
        <div>
            <a href='/new' className='btn btn-success my-3'>Add an author</a>
            <h3>We have quotes by:</h3>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Author</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authors.map((author, i) => {
                        return (
                            <tr key={i} scope='row'>
                                <th className='align-middle'>{author.name}</th>
                                <td><Link to={`/edit/${author._id}`} className='btn btn-outline-warning'>Edit</Link><button onClick={() => deleteAuthor(author._id)} className='btn btn-outline-danger ms-3'>Delete</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList