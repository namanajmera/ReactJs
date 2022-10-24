import React, { useState } from 'react'

function LoggedIn() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const handleLoggedOut = () => {
      setIsLoggedIn(false)
   }
   const handleLoggedIn = () => {
      setIsLoggedIn(true)
   }

   return (
      <div>
         <button onClick={handleLoggedIn}>Logged In</button>
         <button onClick={handleLoggedOut}>Logged Out</button>
         <div>{isLoggedIn ? 'Logged In' : 'Logged Out'}</div>
      </div>
   )
}

export default LoggedIn
