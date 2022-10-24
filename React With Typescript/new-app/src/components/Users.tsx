import React, { useState } from 'react'

type AuthUsers = {
   name: string,
   email: string
}

function Users() {
   const [users, setUsers] = useState<AuthUsers | null>(null);
   const handleLogin = () => {
      setUsers({
         name: "Naman Ajmera",
         email: "naman@example.com"
      })
   }

   const handleLogout = () => {
      setUsers(null)
   }


   return (
      <div>
         <button onClick={handleLogin}> Logged In</button>
         <button onClick={handleLogout}> Logged Out</button>
         <div>User Name is {users && users.name}</div>
         <div>User email is {users && users.email}</div>
      </div>
   )
}

export default Users
