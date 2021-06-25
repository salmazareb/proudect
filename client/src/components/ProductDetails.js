import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

function ProductDetails({id}) {
    const [product, setProduct]= useState({})
    useEffect(()=>{
        axios.get('http://localhost:8000/api/'+id) 
        .then(res => {
         console.log(res.data)
         setProduct(res.data.product);
     })
     .catch(err => console.log(err));
 
     },[id])
     const deleteProduct= ()=> {
        axios.delete('http://localhost:8000/api/'+id+'/delete') 
       .then(res => {
        console.log(res.data)
       
        // const newProduct = allProducts.filter(item => item._id !== id)
        // setAllProducts(newProduct)

    })
    .catch(err => console.log(err));
    }
    return (
        <div>
            <p>{product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button ><Link to={`/${id}/edit`}>Update</Link></button>
            <button onClick= {deleteProduct}><Link to="/"> delete</Link> </button>
        </div>
    )
}

export default ProductDetails
