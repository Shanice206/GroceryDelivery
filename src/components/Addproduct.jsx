import axios from 'axios'
import React, { useState } from 'react'

const Addproduct = () => {
    const[productname,setProductname]=useState("")
    const[productdescription,setProductDescription]=useState("")
    const[productcost,setProductcost]=useState("")
    const[productphoto,setproductPhoto]=useState("")


    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    const handlesubmit=async(e)=>{
        e.preventDefault()
    

    // set loading
    setLoading("Please wait...")

    const formData=new FormData()
    formData.append("product_name",productname)
    formData.append("product_description",productdescription)
    formData.append("product_cost",productcost)
    formData.append("product_photo",productphoto)


    try {
      const response=await axios.post("http://mambashanice.alwaysdata.net/api/add_product",formData)
      setSuccess(response.data.Message)
      setLoading("")
      setError("")



      // reset the form
      setProductname("")
      setProductDescription("")
      setProductcost("")
      setproductPhoto("")
    } catch (error) {
      setLoading("")
      setSuccess("")
      setError(error.message)
    }
      
    }

  


  
  return(
    
       
      <div className="row mt-4 justify-content-center">
        <div className="col-md-6 card shadow p-4 ">
          
      <h1>Add Meals</h1>
      <h2 className='text-warning'>{loading}</h2>
      <h2 className='text-success'>{success}</h2>
      <h2 className='text-danger'>{error}</h2>

       <form action="" onSubmit={handlesubmit}>
          <input type="text" placeholder=' product name' className='form-control' onChange={(e)=>setProductname(e.target.value)}required/><br />
          <textarea name="" id="" cols="57" row="3" className='form-control'placeholder='Describe product' onChange={(e)=>setProductDescription(e.target.value)}required></textarea>
          <input type="number" placeholder=' product cost'className='form-control' onChange={(e)=>setProductcost(e.target.value)} required/><br /><br />
          <input type="file" className='form-control' required accept='image/*' onChange={(e)=>setproductPhoto(e.target.files[0])}/><br />
          <input type="submit" className='btn btn-outline-primary w-100' value="Upload product" />
       </form>
        
      </div>
    </div>
    

  )
}

export default Addproduct
