import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   articles = [
      {
         "source": {
            "id": null,
            "name": "The Indian Express"
         },
         "author": "Trends Desk",
         "title": "Viral Twitter thread shows Stranger Things characters and their Indian doppelgangers",
         "description": "Dustin from the Netflix series has been compared with actor Alam Khan, who played a young Duryodhan in Star Plus’s Mahabharat.",
         "url": "https://indianexpress.com/article/trending/trending-in-india/twitter-thread-shows-stranger-things-characters-and-their-indian-doppelgangers-8041785/",
         "urlToImage": "https://images.indianexpress.com/2022/07/stranger-things-look-alike.jpeg",
         "publishedAt": "2022-07-20T12:47:34Z",
         "content": "Earlier this week, fans of the sci-fi drama compared its characters to their lookalikes from Indian television shows and movies.\r\nIt all started when Twitter user Shikhar Sagar, who goes by the usern… [+1800 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "Mediagazer.com"
         },
         "author": null,
         "title": "ITV reports H1 2022 revenue rose 8% YoY to £1.67B, driven by ITV Studios, up 16% YoY to £927M; total ad revenue rose 5% YoY and digital ad revenue rose 20% YoY (Naman Ramachandran/Variety)",
         "description": "Naman Ramachandran / Variety:\nITV reports H1 2022 revenue rose 8% YoY to £1.67B, driven by ITV Studios, up 16% YoY to £927M; total ad revenue rose 5% YoY and digital ad revenue rose 20% YoY  —  U.K. broadcaster ITV's total external revenues are up 8% at £1.67…",
         "url": "https://mediagazer.com/220728/p1",
         "urlToImage": "https://variety.com/wp-content/uploads/2022/06/Love-Island.jpeg?w=1000",
         "publishedAt": "2022-07-28T09:35:00Z",
         "content": "Mediagazer presents the day's must-read media news on a single page.\r\nThe media business is in tumult: from the production side to\r\nthe distribution side, new technologies are upending the industry.\r… [+416 chars]"
      },
   ]
   constructor() {
      super();
      this.state = {
         articles: this.articles,
         loading: false,
      }
   }

   render() {
      return (
         <div className='container my-10'>
            <h1 className='my-2'>NewsMonkey - Top Headlines</h1>
            <div className="d-flex flex-row flex-wrap">
               {
                  this.state.articles && this.state.articles.map((newsItem, index) => {
                     newsItem.title = newsItem.title.slice(0, 30) + (newsItem.title.length > 30 ? '.....' : '');
                     newsItem.description = newsItem.description.slice(0, 80) + (newsItem.description.length > 30 ? '.....' : '');
                     return <NewsItem articles={newsItem} key={index} />
                  })
               }
            </div>
         </div>
      )
   }
}

export default News
