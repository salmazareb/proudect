import React, {useState, useEffect} from 'react'
import axios from 'axios'
function EditProduct({id}) {
    const [title, setTitle]=useState("")
    const [price, setPrice]=useState(0)
    const [description, setDescription]=useState("")
    useEffect(()=>{
        axios.get('http://localhost:8000/api/'+id) 
        .then(res => {
         console.log(res.data)
         setTitle(res.data.product.title)
         setPrice(res.data.product.price)
         setDescription(res.data.product.description)
     })
     .catch(err => console.log(err));
 
     },[id])

     const handleForm= e=>{
        e.preventDefault()
        axios.put('http://localhost:8000/api/'+id+'/edit', {
            title,
            price,
            description
        })
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    }
    return (
        <div>
          <form onSubmit= {handleForm}> 
                <label>Title </label>
                <input type="text" value= {title} onChange={e=>setTitle(e.target.value)}/><br />
                <label>Price </label>
                <input type="number" value= {price} onChange={e=>setPrice(e.target.value)}/> <br />
                <label>Description </label>
                <input type="text" value= {description} onChange={e=>setDescription(e.target.value)}/> <br />

                <button type= "submit" >Update</button>
            </form>  
        </div>
    )
}

export default EditProduct
