import React from 'react'

export default function NewsItem(props) {
   const { title, description, urlToImage, url, publishedAt, author } = props.articles;
   return (
      <div className="card mx-2 my-5" style={{ width: "18rem" }}>
         <img src={urlToImage} className="card-img-top" alt="..." style={{ width: '100%', height: '50%'}}/>
         <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {publishedAt}</small></p>
            <a href={url} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary" style={{ alignItems: "bottom-align" }}>Detailed news</a>
         </div>
      </div>
   )
}

