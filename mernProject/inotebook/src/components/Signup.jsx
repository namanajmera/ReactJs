import React, { useContext } from 'react'
import authContext from '../context/AuthContext/authContext';
import useFormInputs from '../hooks/useFormInputs';

function Signup() {

   const authContextData = useContext(authContext);
   const { signUp } = authContextData

   const name = useFormInputs('');
   const email = useFormInputs('');
   const password = useFormInputs('');
   const confirmPassword = useFormInputs('');

   const signUpUser = (e) => {
      e.preventDefault();
      signUp(email,password,name)
      email.setValue('');
      password.setValue('');
      name.setValue('');
      confirmPassword.setValue('');
   }

  return (
     <div className='container my-5'>
      <h2>Sign-Up</h2>
        <form>
           <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name.value} onChange={name.onChange} />
           </div>
           <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email.value} onChange={email.onChange} />
           </div>
           <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password.value} onChange={password.onChange} />
           </div>
           <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm-Password</label>
              <input type="password" className="form-control" id="confirmPassword" value={confirmPassword.value} onChange={confirmPassword.onChange} />
           </div>
           <button type="submit" className="btn btn-outline-primary" onClick={signUpUser}>Sign-Up</button>
        </form>
     </div>
  )
}

export default Signup
