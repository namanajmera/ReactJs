import authContext from "./authContext";

const AuthState = (props) => {
   const host = "http://localhost:5000/api/";
   const headers = {
      'Content-Type': 'application/json',
   }

   const login = async (email,password) => {
      let url = `${host}auth/login`
      const response = await fetch(url,{
         method:'POST',
         headers:headers,
         body: JSON.stringify({email,password})
      })
      let loginData = await response.json();
      if (loginData) {
         localStorage.setItem('token', JSON.stringify(loginData.authtoken))
      }

      return loginData;
   }
   
   const signUp = async (email,password,name) => {
      let url = `${host}auth/createuser`
      const response = await fetch(url, {
         method: 'POST',
         headers: headers,
         body: JSON.stringify({ email, password, name })
      })
      let signUp = await response.json();
      if (signUp) {
         console.log("signUp ==>", signUp)
      }
   }

   return (
      <authContext.Provider value={{login,signUp}}>
         {props.children}
      </authContext.Provider>
   )
}

export default AuthState;