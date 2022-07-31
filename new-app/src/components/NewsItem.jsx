import React, { Component } from 'react'

export class NewsItem extends Component {
   render() {
      let { title, descripition, imgUrl } = this.props;
      return (
         <div className="card mx-2 my-5" style={{ width: "18rem" }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{descripition}</p>
               <a href="/" className="btn btn-sm btn-primary">Detailed news</a>
            </div>
         </div>
      )
   }
}

export default NewsItem
