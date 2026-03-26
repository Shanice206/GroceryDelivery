import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigate=useNavigate(

  )
  // states to hold data
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")


  // 3 states to show what is happening on the background
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // function to hold submit
  const handlesubmit=async(e)=>{
    e.preventDefault()

    // update loading state
    setLoading("Logging into Cicy's Grocery Shop...")

    const formData=new FormData()
    formData.append("email",email)
    formData.append("password",password)

    try {
      const response=await axios.post("http://mambashanice.alwaysdata.net/api/signin",formData)
    if (response.data.user){
      setLoading("")
      setSuccess(response.data.Message)
      navigate("/getproduct")
    }  
    else{
      setLoading("")
      setSuccess("")
      setError(response.data.Message)
    }
    } catch (error) {
      setLoading("")
      setSuccess("")
      setError(error.message)
      
    }
  }

  return (
    <div>
      
      <div className="row mt-4 justify-content-center">
        <div className="col-md-6 card shadow p-4">
          <form action="" onSubmit={handlesubmit}>
            <h2>Signin</h2>

            {/* binding the states */}
            <h2 className="text-warning">{loading}</h2>
            <h2 className="text-success">{success}</h2>
            <h2 className="text-danger">{error}</h2>
            
            <input type="email" placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)} /><br />
            <input type="submit" value="Signin" className='btn btn-outline-dark w-100'/><br />
            Don't have an account <br />
            <Link to="/signup">Signup</Link>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Signin
