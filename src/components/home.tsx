import React, { useState } from 'react';
import "../scss/home.scss"

function Home() {
    const [formdata , setFormdata] = useState({
        firstname : "",
        email:"",
        password:""
    })
   function formhandle(e:any){
    
   console.log(e.target.value)
   setFormdata((prev)=>{
    return {...prev,[e.target.name] : e.target.value}
   })
   }
  return (
    <div className='text-center'>

 <h1>Form</h1>

 <div className="container">
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" value={formdata.firstname} name="firstname" className="form-control" id="exampleInputEmail1" onChange={formhandle} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" value={formdata.email} className="form-control" id="exampleInputEmail1" onChange={formhandle}  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={formdata.password} className="form-control" id="exampleInputPassword1" onChange={formhandle} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>

  <p>my name is <span className='text-success'>{formdata.firstname}</span> and my email is <span className='text-warning'>{formdata.email}</span> password <span className='text-danger'>{formdata.password}</span></p>
</form>

        </div>
        <div className="col-3"></div>
    </div>
 </div>


    </div>
  )
}

export default Home