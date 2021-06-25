import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ProductForm from './ProductForm'
import {Link} from '@reach/router'

function AllProducts() {
    const [allProducts, setAllProducts]=useState([{}])
    useEffect(()=>{
       axios.get('http://localhost:8000/api') 
       .then(res => {
        console.log(res.data)
        setAllProducts(res.data.products);
    })
    .catch(err => console.log(err));

    },[setAllProducts]) 
    const deleteProduct= (id)=> {
        axios.delete('http://localhost:8000/api/'+id+'/delete') 
       .then(res => {
        console.log(res.data)
        const newProduct = allProducts.filter(item => item._id !== id)
        setAllProducts(newProduct)

    })
    .catch(err => console.log(err));
    }
    return (
        <div>
            <ProductForm setAllProducts={setAllProducts} allProducts={allProducts}/> 
            <h1>All Products:</h1>
            <ul>
                {
                    allProducts.map((item,index)=>(
                        <li key={index}>
                            <Link to ={`/${item._id}`}>{item.title}
                            
                            </Link>
                            <button onClick= {() => deleteProduct(item._id)}> delete </button>

                        </li>
                    ))

                }
            </ul>
        </div>
    )
}

export default AllProducts
