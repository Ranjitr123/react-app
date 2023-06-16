import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import axios from 'axios';


function App() {

const [state,setState] =  useState(0);
let url = "https://jsonplaceholder.typicode.com/posts"
useEffect(()=>{

  axios.get(url).then((res)=>{
  console.log(res.data)
  }).catch((err)=>{
    console.log(err)
  })
},[])
  return (
    <div className="App">
     <h1 className='text-center text-success'>this is heading part</h1>
     <h2>{state}</h2>
     <button onClick={()=>setState(state+1)}>increase</button>
     <button onClick={()=>setState(state-1)}>decrease</button>
    </div>
  );
}

export default App;
