import React, { useContext } from 'react'
import authContext from '../context/AuthContext/authContext';
import useFormInputs from '../hooks/useFormInputs';
import { useNavigate } from 'react-router-dom'

function Login() {
   let navigate = useNavigate();

   const authContextData = useContext(authContext);
   const { login } = authContextData;
   const email = useFormInputs('');
   const password = useFormInputs('');

   const loginUser = async (e) => {
      e.preventDefault();
      const data = await login(email.value,password.value);
      if (data) {
         navigate('/')
      }
      email.setValue('');
      password.setValue('');
   }

   return (
      <div className='container my-5'>
         <h2>Login</h2>
         <form>
            <div className="mb-3">
               <label htmlFor="email" className="form-label">Email</label>
               <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={email.value} onChange={email.onChange}  required/>
            </div>
            <div className="mb-3">
               <label htmlFor="password" className="form-label" >Password</label>
               <input type="password" className="form-control" name="password" id="password" value={password.value} onChange={password.onChange}  required/>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!email.value || !password.value} onClick={loginUser}>Login</button>
         </form>
      </div>
   )
}

export default Login
