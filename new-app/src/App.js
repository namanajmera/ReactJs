import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
    category = [
    {
      path: '/',
      category: 'general'
    },
    {
      path: '/business',
      category: 'business'
    },
    {
      path: '/entertainment',
      category: 'entertainment'
    },
    {
      path: '/health',
      category: 'health'
    },
    {
      path: '/science',
      category: 'science'
    },
    {
      path: '/sports',
      category: 'sports'
    },
    {
      path: '/technology',
      category: 'technology'
    },
  ]
  render() {
    return (
      <div>
        <NavBar category={(data) => this.content.category(data)} country={(data1) => this.content.country(data1)} />
        <Routes>
          {/* <Route path="/?" element={ <News ref={instance => { this.content = instance; }} /> } /> */}
          {
            this.category && this.category.map((element,index) => {
              return <Route excat path={element.path} element={<News key={element.category} category={element.category} ref={instance => { this.content = instance; }} />} key={index}/>
            })
          }
        </Routes>
      </div>
    )
  }
}

