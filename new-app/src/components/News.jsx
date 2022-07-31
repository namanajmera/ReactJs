import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   render() {
      return (
         <div className='container my-10'>
            This is a News Component
            <NewsItem />
         </div>
      )
   }
}

export default News
