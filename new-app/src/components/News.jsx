import React, { useState, useEffect } from 'react'
// import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import NewsItem from './NewsItem'
import Pagination from './Pagination';

export default function News(props) {
   const [articles] = useState([])
   const [payload, setPayload] = useState({})

   useEffect(() => {
      setPayload({
         articles: articles,
         currentArticles: articles,
         loading: true,
         page: 1,
         prevDisabled: true,
         nextDisabled: false,
         totalPage: -1,
         pageSize: 5,
         category: '',
         country: '',
         totalResults: 0
      })
      document.title = `${capitalizeFirstLetter(props.category)} -News`;
      callNewsApi(1);
      // eslint-disable-next-line
   }, [articles,props.category])

   const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }

   const callNewsApi = async (page, category = '', country = 'in') => {
      setPayload({
         loading: true,
         prevDisabled: page === 1
      })
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${payload.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setPayload({
         articles: parsedData.articles,
         currentArticles: parsedData.articles,
         loading: false,
         page,
         prevDisabled: page === 1,
         totalPage: Math.ceil(parsedData.totalResults / payload.pageSize),
         nextDisabled: page === payload.totalPage,
         category,
         country,
         totalResults: parsedData.totalResults
      })
   }

   const handlePageChange = (data) => {
      if (data === 'next') {
         callNewsApi(payload.page + 1)
      } else {
         callNewsApi(payload.page - 1)
      }
   }

   // const category = (category) => {
   //    callNewsApi(1, category, payload.country);
   // }

   // const country = (country) => {
   //    callNewsApi(1, payload.category, country)
   // }

   const formatDate = (date) => {
      let dateObj = new Date(date);
      let month = String((dateObj.getMonth() + 1)).padStart(2, '0');
      let day = String(dateObj.getDate()).padStart(2, '0');
      let year = dateObj.getFullYear()
      let output = month + '/' + day + '/' + year;
      return output;
   }

   // const fetchMoreData = async () => {
   //    setPayload({
   //       page: payload.page + 1,
   //    })
   //    if (payload.page !== payload.totalPage) {
   //       let url = `https://newsapi.org/v2/top-headlines?country=${payload.country}&category=${props.category}&apiKey=${props.apiKey}&page=${payload.page + 1}&pageSize=${payload.pageSize}`;
   //       let data = await fetch(url);
   //       let parsedData = await data.json();
   //       setPayload(...payload,{
   //          articles: payload.articles.concat(parsedData.articles),
   //          loading: false,
   //          totalPage: Math.ceil(parsedData.totalResults / payload.pageSize),
   //          totalResults: parsedData.totalResults
   //       })
   //    }
   // }

   return (
      <>
         <h1 className='my-2 d-flex justify-content-center' style={{ marginTop:"63px !important"}}>NewsMonkey - Top Headlines</h1>
         {/* <InfiniteScroll
            dataLength={payload.articles && payload.articles.length}
            next={fetchMoreData}
            hasMore={payload.articles && payload.articles.length !== payload.totalResults}
            loader={payload.page !== payload.totalPage && <Loading />}
            style={{ height: '0', overflow: 'none' }}
         > */}
            <div className='container my-10'>

               <div className="d-flex flex-row flex-wrap d-flex justify-content-center">
                  {
                     !payload.loading ? payload.articles && payload.articles.map((newsItem, index) => {
                        newsItem.title = newsItem.title && newsItem.title.slice(0, 30) + (newsItem.title.length > 30 ? '...' : '');
                        newsItem.description = newsItem.description && newsItem.description.slice(0, 80) + (newsItem.description.length > 30 ? '...' : '');
                        newsItem.publishedAt = formatDate(newsItem.publishedAt);
                        return <NewsItem articles={newsItem} key={index} />
                     }) : <Loading />
                  }
               </div>
            </div>
         {/* </InfiniteScroll> */}
         {
               !payload.loading
               &&
               <Pagination prevDisabled={payload.prevDisabled} nextDisabled={payload.nextDisabled} pageChange={handlePageChange} />}
      </>
   )
}
