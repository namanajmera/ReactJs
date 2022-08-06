import React from 'react'

function Login() {

   return (
      <div className='container my-5'>
         <h2>Login</h2>
         <form>
            <div className="mb-3">
               <label htmlFor="email" className="form-label">Email</label>
               <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
               <label htmlFor="password" className="form-label">Password</label>
               <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
         </form>
      </div>
   )
}

export default Login
