import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
import {Container, Table, Button} from 'react-bootstrap'

function AllAuthors() {
    const [authors,setAuthors]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api') 
       .then(res => {
        console.log(res.data)
        setAuthors(res.data.authors);
    })
    .catch(err => console.log(err));

    },[])
    const handleDelete = (id) => {
    
            axios.delete('http://localhost:8000/api/'+id+'/delete') 
           .then(res => {
            console.log(res.data)
            const newAuthor= authors.filter(item => item._id !== id)
            setAuthors(newAuthor)
    
        })
        .catch(err => console.log(err));
    }
    return (
        <Container>
            
            <Link to = "/new">Add an Author</Link>
            <h3>we have quotes by:</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th> Author </th>
                    <th>Action Avaliable</th>
                    </tr>
                </thead>
                <tbody>
                     {
                    authors.map((item, index)=>(
                        <tr key={index}>
                            <td>{item.name}</td>
                       
                            <td><Button variant="success"><Link to ={`/${item._id}/edit`} style= {{color: 'white'}}>Edit</Link></Button>
                            <Button variant="danger" onClick={()=> handleDelete(item._id)}>Delete</Button>
                            </td>
                        </tr>
                        

                    ))
                }
                </tbody>
               
            </Table>
        </Container>
    )
}

export default AllAuthors
