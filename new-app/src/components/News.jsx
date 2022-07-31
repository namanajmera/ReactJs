import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   render() {
      return (
         <div className='container my-10'>
            <h1 className='my-2'>NewsMonkey - Top Headlines</h1>
            <div className="d-flex flex-row flex-wrap">
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
               <NewsItem title="First news" descripition="First Descripition" imgUrl="https://mobile.twitter.com/reactjs" />
            </div>
         </div>
      )
   }
}

export default News
