import React, { Component } from 'react'

export class NewsItem extends Component {
   render() {
      let { title, description, urlToImage, url } = this.props.articles;
      return (
         <div className="card mx-2 my-5" style={{ width: "18rem" }}>
            <img src={urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{description}</p>
               <a href={url} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Detailed news</a>
            </div>
         </div>
      )
   }
}

export default NewsItem
