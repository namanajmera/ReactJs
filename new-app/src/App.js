import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [category] = useState([
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
  ])
  const [apiKey] = useState(process.env.REACT_APP_API_KEY);
  return (
    <div>
      {/* category={(data) => content.category(data)} country={(data1) => content.country(data1)} */}
      <NavBar  />
      <Routes>
        {/* <Route path="/?" element={ <News ref={instance => { this.content = instance; }} /> } /> */}
        {/* ref={instance => { this.content = instance; }} */}
        {
          category && category.map((element, index) => {
            return <Route excat path={element.path} element={<News key={element.category} category={element.category}  apiKey={apiKey} />} key={index} />
          })
        }
      </Routes>
    </div>
  )
}
