import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function NavBar(props) {
   const title = props.title;
   return (
      <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">{title}</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link disabled" href='/'>{props.about}</a>
                     </li>
                  </ul>
                  <form className="d-flex" role="search">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                  <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'} mx-3`}>
                     <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                     <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darkModeText}</label>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   )
}

NavBar.propTypes = {
   title: PropTypes.string,
}

NavBar.defaultProps = {
   about: "Naman Ajmera"
}