
import { Link } from '@reach/router'
import React, {useState,useEffect} from 'react'
import {Form, Button, Container, Alert} from 'react-bootstrap'
import axios from 'axios'
function EditAuthor({id}) {
    
    const [name, setName] = useState()
    const [errors, setErrors] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8000/api/'+id)
        .then(res => {
            console.log(res.data)
            setName(res.data.author.name)})
   
    },[id])
    const handleEdit= e=>{
        e.preventDefault()
        axios.put('http://localhost:8000/api/'+id+'/edit', {
            name
        })
            .then(res=>console.log(res.data))
            .catch(err=>{ const errorResponse =  err.response.data
                const errorArr = []; // Define  temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                console.log(errorArr) } 
           )
    }

    return (
    
        <Container>
            <Link to="/">Home</Link>
            <h3>Edit Author</h3>
            {errors.length>0&&<Alert variant='danger'>{errors.map((err, index) => <p key={index}>{err}</p>)}</Alert> }
            <Form onSubmit={handleEdit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type="text" placeholder="Enter name" onChange={e=>setName(e.target.value)} />
        
                </Form.Group>

        <Button variant="light"><Link to="/">Cancel</Link></Button>

        <Button variant="primary" type="submit">
            Edit
        </Button>
        </Form>
    </Container>
    
    )
}

export default EditAuthor
