import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // declare the four states to hold data
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[phone,setPhone]=useState("")

  // create the 3 states
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")


  // create a function to handle data submission
    const handlesubmit=async(e)=>{
      e.preventDefault() 

      // set loading
      setLoading("Welcome to Cicy's Grocery shop...")

      // create a formdata
      const formData=new FormData()
      formData.append("username",username)
      formData.append("email",email)
      formData.append("password",password)
      formData.append("phone",phone)

      // submit the details
      try{
      const response=await axios.post("http://mambashanice.alwaysdata.net/api/signup",formData)
      setSuccess(response.data.Message)
      setLoading("")
      console.log(response)
      }catch (error){
          setError(error.Message)
          setLoading("")
      }
    }




  return (
    <div className='row mt-4 justify-content-center'>
      <div className="col-md-6 card shadow p-4 ">
        <h1>Signup</h1>
        {/* bind the state */}
        <h2 className="text-primary">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>
        {/* Create a form */}
        <form action="" onSubmit={handlesubmit}>
          <input type="text" placeholder='Enter username' className='form-control' onChange={(e)=>setUsername(e.target.value)} required /><br />
          <input type="email" placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)} required/><br />
          <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)} required/><br />
          <input type="tel" placeholder='Enter phone' className='form-control' onChange={(e)=>setPhone(e.target.value)} required/><br />
          
          {/* create submit button */}
          <input type="submit" value="Signup" className='btn btn-outline-dark
           w-100' />
        </form>
          Already have an account?<Link to="/signin">Signin</Link>
      </div>
      

    </div>
  )
}

export default Signup
