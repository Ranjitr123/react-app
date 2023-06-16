import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Products from './components/products';
import Nopagefound from "./components/page-not-found"


function App() {

const [state,setState] =  useState(0);
const [value,setValue ] = useState([])
let url = "https://jsonplaceholder.typicode.com/posts"
useEffect(()=>{

  axios.get(url).then((res)=>{
  console.log(res.data)
  setValue(res.data)
  }).catch((err)=>{
    console.log(err.message)
  })
},[])
  return (
    <div className="App">
     {/* <h1 className='text-center text-success'>this is heading part</h1>
     <h2>{state}</h2>
     <button onClick={()=>setState(state+1)}>increase</button>
     <button onClick={()=>state===0 ? setState(0):setState(state-1)}>decrease</button>

     {
      value.map((val:any)=>
        <p key={val.id} className='text-center text-success'>{val.title}</p>
        )
     } */}

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='*' element={<Nopagefound />}></Route>   
     </Routes>    
     </BrowserRouter>
    </div>
  );
}

export default App;
