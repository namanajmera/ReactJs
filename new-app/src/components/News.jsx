import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import Pagination from './Pagination';

export class News extends Component {
   articles = []
   constructor(props) {
      super(props);
      this.state = {
         articles: this.articles,
         loading: true,
         page: 1,
         prevDisabled: true,
         nextDisabled: false,
         totalPage: -1,
         pageSize: 20,
         category: '',
         country: ''
      }
      document.title = `${this.capitalizeFirstLetter(this.props.category)} -News`
   }

   capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }

   callNewsApi = async (page, category = '', country = 'in') => {
      this.setState({
         loading: true,
         prevDisabled: page === 1
      })
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${this.props.category}&apiKey=2401e93f8c14457fb12f18debe7accfb&page=${page}&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
         articles: parsedData.articles,
         loading: false,
         page,
         prevDisabled: page === 1,
         totalPage: Math.ceil(parsedData.totalResults / this.state.pageSize),
         nextDisabled: page === this.state.totalPage,
         category,
         country,
      })
   }

   async componentWillMount() {
      this.callNewsApi(1);
   }

   handlePageChange = (data) => {
      if (data === 'next') {
         this.callNewsApi(this.state.page + 1)
      } else {
         this.callNewsApi(this.state.page - 1)
      }
   }

   category = (category) => {
      this.callNewsApi(1, category, this.state.country);
   }

   country = (country) => {
      console.log("country", country);
      this.callNewsApi(1, this.state.category, country)
   }

   formatDate = (date) => {
      let dateObj = new Date(date);
      let month = String((dateObj.getMonth() + 1)).padStart(2, '0');
      let day = String(dateObj.getDate()).padStart(2, '0');
      let year = dateObj.getFullYear()
      let output = month + '/' + day + '/' + year;
      return output;
   }

   render() {
      return (
         <div className='container my-10'>
            <h1 className='my-2 d-flex justify-content-center'>NewsMonkey - Top Headlines</h1>
            <div className="d-flex flex-row flex-wrap d-flex justify-content-center">
               {
                  !this.state.loading ? this.state.articles && this.state.articles.map((newsItem, index) => {
                     newsItem.title = newsItem.title && newsItem.title.slice(0, 30) + (newsItem.title.length > 30 ? '...' : '');
                     newsItem.description = newsItem.description && newsItem.description.slice(0, 80) + (newsItem.description.length > 30 ? '...' : '');
                     newsItem.publishedAt = this.formatDate(newsItem.publishedAt);
                     return <NewsItem articles={newsItem} key={index} />
                  }) :
                     <Loading />
               }
            </div>
            {
               !this.state.loading
               &&
               <Pagination prevDisabled={this.state.prevDisabled} nextDisabled={this.state.nextDisabled} pageChange={this.handlePageChange} />}
         </div>
      )
   }
}

export default News
