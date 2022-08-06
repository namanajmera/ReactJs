import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
  let location = useLocation();
  let navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem('token', '');
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={!token ? "/login" : "/"}>iNoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${currentPath === '/' && "active"}`} aria-current="page" to={!token ? "/login" : "/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${currentPath === '/about' && "active"}`} to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {
              token
                ?
                <button className="btn btn-outline-primary mx-2" onClick={handleLogout}>Logout</button>
                :
                <div>
                  <Link className={`btn ${currentPath === '/login' ? "btn-primary" : "btn-outline-primary"}  mx-2`} type="submit" to="/login">Login</Link>
                  <Link className={`btn ${currentPath === '/signup' ? "btn-primary" : "btn-outline-primary"} mx-2`} type="submit" to="/signup">Sign-Up</Link>
                </div>
            }
          </form>
        </div>
      </div>
    </nav>
  )
}
