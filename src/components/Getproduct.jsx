import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Getproduct = () => {
  const navigate=useNavigate()


const[products,setProducts]=useState([])
const[loading,setLoading]=useState("")
const[error,setError]=useState("")


  // function to handle get product
  const getProduct=async()=>{
    setLoading("Please wait as we retrieve products...")


    try {
      const response=await axios.get("http://mambashanice.alwaysdata.net/api/get_product")
      setLoading("")
      setProducts(response.data)
      setError("")
    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }
  useEffect(()=>{
    getProduct()
  },[])
  const imgurl="http://mambashanice.alwaysdata.net/static/images/"

  

return (

    <div className='row'>
      <h2>Available Groceries In Store</h2>

      <div className="row col-md-12">
        <div className="carousel slide row col-md-12" data-bs-ride="carousel" id="mycarousel">
          <div className='carousel inner'>
            <div className="carousel-item active">
              <img src="/image/image1.jpg" alt="image 1" className="w-100 d-block" height={290}/>
            </div>
            <div className="carousel-item active">
              <img src="/image/image2.jpg" alt="image 2" className="w-100 d-block" height={290}/>
            </div>
            <div className="carousel-item active">
              <img src="/image/image3.jpg" alt="image 3" className="w-100 d-block" height={290} />
            </div>
            <div className="carousel-item active">
              <img src="/image/image4.jpg" alt="image 4" className="w-100 d-block" height={290} />
              </div>
              <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon bg-dark"></span>
                  </a>
                  <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark"></span>
                </a>
          </div>

        </div>
      </div>

      <h2 className="text-warning">{loading}</h2>
      <h2 className="text-danger">{error}</h2>

      {products.map((product)=>(
      <div className="col-md-3 justify-content-center mb-4 h-100">
        <div className="card  mb-3 shadow">
          <img src={imgurl+product.product_photo}alt="" height="250px" />


          <div className="card-body">
            <h5>{product.product_name}</h5>
            <p className="text-muted">{product.product_description}</p>
            <b className="text-danger">{product.product_cost}</b><br />
            <button className='btn btn-outline-primary w-100' onClick={()=>navigate("/mpesa",{state:{product}})}>Purchase now</button>
         
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Getproduct
