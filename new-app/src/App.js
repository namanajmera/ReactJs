import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container my-3">
          Hello Class Based Component.
        </div>
      </div>
    )
  }
}

