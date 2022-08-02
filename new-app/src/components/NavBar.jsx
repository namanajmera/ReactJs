import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
   return (
      <div>
         <nav className="navbar fixed-top navbar-expand-lg bg-light">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">News monkey</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About us</Link>
                     </li>
                     {/* <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Category
                           </a>
                           <ul className="dropdown-menu">
                              <li><button className="dropdown-item" onClick={() => this.props.category('sports')}>Sports</button></li>
                              <li><button className="dropdown-item" onClick={() => this.props.category('entertainment')}>Entertainment</button></li>
                              <li><button className="dropdown-item" onClick={() => this.props.category('technology')}>Technology</button></li>
                           </ul>
                        </li> */}
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Country
                        </a>
                        <ul className="dropdown-menu">
                           <li><button className="dropdown-item" onClick={() => this.props.country('in')}>India</button></li>
                           <li><button className="dropdown-item" onClick={() => this.props.country('us')}>US</button></li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default NavBar;