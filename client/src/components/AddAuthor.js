import { Link } from '@reach/router'
import React, {useState} from 'react'
import {Form, Button, Container, Alert} from 'react-bootstrap'
import axios from 'axios'
function AddAuthor() {
    const [name, setName]= useState('')
    const [errors, setErrors]= useState([]) 
    const handleSubmit=e=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/new/author', {name })
        .then(res=>console.log(res.data) )
        .catch(err=>{
            { const errorResponse =  err.response.data
                const errorArr = []; // Define  temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);}
           

    })
}
    return (
        <Container>
            <Link to="/">Home</Link>
            <h3>Add new Author</h3>
            {errors.length>0&&<Alert variant='danger'>{errors.map((err, index) => <p key={index}>{err}</p>)}</Alert> }
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={e=>setName(e.target.value)} />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

        <Button variant="light"><Link to="/">Cancel</Link></Button>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Container>
    )
}

export default AddAuthor
