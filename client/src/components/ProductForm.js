import React, {useState} from 'react'
import axios from 'axios'
function ProductForm({setAllProducts, allProducts}) {
    const [title, setTitle]=useState("")
    const [price, setPrice]=useState(0)
    const [description, setDescription]=useState("")
    const handleForm= e=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/new/product', {
            title,
            price,
            description
        })
            .then(res=>setAllProducts([...allProducts, res.data.product]))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit= {handleForm}> 
                <label>Title </label>
                <input type="text" onChange={e=>setTitle(e.target.value)}/><br />
                <label>Price </label>
                <input type="number" onChange={e=>setPrice(e.target.value)}/> <br />
                <label>Description </label>
                <input type="text" onChange={e=>setDescription(e.target.value)}/> <br />

                <button type= "submit" >Create</button>
            </form>
        </div>
    )
}

export default ProductForm
