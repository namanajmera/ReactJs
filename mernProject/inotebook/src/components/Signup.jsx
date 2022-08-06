import React from 'react'

function Signup() {
  return (
     <div className='container my-5'>
      <h2>Sign-Up</h2>
        <form>
           <div className="mb-3">
              <label htmlFor="userName" className="form-label">Username</label>
              <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" />
           </div>
           <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
           <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
           </div>
           <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm-Password</label>
              <input type="password" className="form-control" id="confirmPassword" />
           </div>
           <button type="submit" className="btn btn-outline-primary">Sign-Up</button>
        </form>
     </div>
  )
}

export default Signup
