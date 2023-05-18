import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const {initialName, onSubmitProp, errors} = props
    const [name, setName] = useState(initialName)

    // console.log(name)
    // console.log(initialName)
    const submitHandler = e => {
        e.preventDefault()
        onSubmitProp({name})
    }

    return (
        <div>
            <a href="/" className='btn btn-primary'>Home</a>
            <div>
        {
            errors.map((err, idx) => <p key={idx} style={{color: 'red'}}>{err}</p>)
        }
                <form onSubmit={submitHandler}>
                    <label className='my-3 me-1'>Name:</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                    <span ><a href="/" className='btn btn-outline-danger me-3'>Cancel</a><button type='submit' className='btn btn-outline-success'>Submit</button></span>
                </form>
            </div>
        </div>
    )
}

export default Form