import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import NewsItem from './NewsItem'
// import Pagination from './Pagination';

export class News extends Component {
   articles = []
   constructor(props) {
      super(props);
      this.state = {
         articles: this.articles,
         currentArticles: this.articles,
         loading: true,
         page: 1,
         prevDisabled: true,
         nextDisabled: false,
         totalPage: -1,
         pageSize: 20,
         category: '',
         country: '',
         totalResults: 0
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
         currentArticles: parsedData.articles,
         loading: false,
         page,
         prevDisabled: page === 1,
         totalPage: Math.ceil(parsedData.totalResults / this.state.pageSize),
         nextDisabled: page === this.state.totalPage,
         category,
         country,
         totalResults: parsedData.totalResults
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

   fetchMoreData = async () => {
      this.setState({
         page: this.state.page + 1,
      })
      if (this.state.page !== this.state.totalPage) {
         let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=2401e93f8c14457fb12f18debe7accfb&page=${this.state.page}&pageSize=${this.state.pageSize}`;
         let data = await fetch(url);
         let parsedData = await data.json();
         this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalPage: Math.ceil(parsedData.totalResults / this.state.pageSize),
            totalResults: parsedData.totalResults
         })
      }
   }

   render() {
      return (
         <>
            <h1 className='my-2 d-flex justify-content-center'>NewsMonkey - Top Headlines</h1>
            <InfiniteScroll
               dataLength={this.state.articles.length}
               next={this.fetchMoreData}
               hasMore={this.state.articles.length !== this.state.totalResults}
               loader={this.state.page === this.state.totalPage && <Loading />}
               style={{ height: '0', overflow: 'none' }}
            >
               <div className='container my-10'>

                  <div className="d-flex flex-row flex-wrap d-flex justify-content-center">
                     {
                        !this.state.loading ? this.state.articles && this.state.articles.map((newsItem, index) => {
                           newsItem.title = newsItem.title && newsItem.title.slice(0, 30) + (newsItem.title.length > 30 ? '...' : '');
                           newsItem.description = newsItem.description && newsItem.description.slice(0, 80) + (newsItem.description.length > 30 ? '...' : '');
                           newsItem.publishedAt = this.formatDate(newsItem.publishedAt);
                           return <NewsItem articles={newsItem} key={index} />
                        }) : <Loading />
                     }
                  </div>
               </div>
            </InfiniteScroll>
            {/* {
               !this.state.loading
               &&
               <Pagination prevDisabled={this.state.prevDisabled} nextDisabled={this.state.nextDisabled} pageChange={this.handlePageChange} />} */}
         </>
      )
   }
}

export default News
