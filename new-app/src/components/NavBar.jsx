import React, { Component } from 'react'

export default class NavBar extends Component {
   render() {
      return (
         <div>
            <nav className="navbar navbar-expand-lg bg-light">
               <div className="container-fluid">
                  <a className="navbar-brand" href="/">News monkey</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/about">About us</a>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Category
                           </a>
                           <ul className="dropdown-menu">
                              <li><button className="dropdown-item" onClick={() => this.props.category('sports')}>Sports</button></li>
                              <li><button className="dropdown-item" onClick={() => this.props.category('entertainment')}>Entertainment</button></li>
                              <li><button className="dropdown-item" onClick={() => this.props.category('technology')}>Technology</button></li>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Country
                           </a>
                           <ul className="dropdown-menu">
                              <li><button className="dropdown-item" onClick={() => this.props.country('in')}>India</button></li>
                              <li><button className="dropdown-item" onClick={() => this.props.country('us')}>US</button></li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      )
   }
}
