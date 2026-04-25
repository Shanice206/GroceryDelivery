import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesa from './components/Mpesa';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        
        <h1 className='text-dark'><b>Fresh Food Deliveries </b></h1>
      </header>
        <Navbar/>



      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/getproduct' element={<Getproduct/>}/>
        <Route path='/mpesa' element={<Mpesa/>}/>
      </Routes>
      <div className="row bg-dark text-light p-4">
      <div className="col-md-4 justify-content-center">
        <h3>About us</h3>
        <p>Fresh Food Deliveries  is a qualified online platform where you can shop for fresh meals from the comfort of your house and they get delivered in minutes</p>
        <p>We are also available across all online platforms as Fresh Food Deliveries</p>
      </div>
      <div className="col-md-4 justify-content-center">
        <h3>Contact us</h3>
        <form action=""> 
          <input type="email" placeholder='Enter your email' className='form-control' /><br />
          <textarea name="" id="" placeholder='Leave a comment' className='form-control'></textarea><br />
           <button class="btn btn-outline-danger">Send Feedback</button>

        </form>
      </div>
      <div className="col-md-4 justify-content-center">
        <h4>Get to know us online</h4>
         <a href="https://facebook.com" target='blank'> 
         <img src="/image/img2.png" alt="fb" />
         </a>
         <a href="https://instagram.com" target='blank'>
         <img src="/image/img1.jpeg" alt="" />
         </a>
         <a href="https://x.com">
        
         </a>

      </div>
      </div>
      <footer className='App-footer'>
        <h2>Fresh Food Deliveries @ 2026 All rights reserved</h2>
      </footer>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
