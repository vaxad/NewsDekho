import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{

    const[articles,setArticles]=useState([]);
    const[loading,setLoading]=useState(true);
    const[page,setPage]=useState(1);
    const[totalResults,setTotalResults]=useState(0);  
    document.title=`${(props.category).charAt(0).toUpperCase()+(props.category).slice(1)} - NewsDekho`;


    const handleNext=async ()=>{
        setPage(page+1);
        updateNews();
    }

   const handlePrev=async ()=>{
        setPage(page-1);
        updateNews();
    }

    const fetchMoreData=async ()=>{
        let url=`https://api.newscatcherapi.com/v2/search?q=${props.category}&countries=${props.country}&page=${page}&page_size=${props.pageSize}`;
        setPage(page+1);
        let data= await fetch(url,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-api-key':'vQ6vl1L8Sj66v2eFrcQglAlDENE5NFRWjssBpO0lhRs'
            }
        });
        let parseData= await data.json();
        
        setArticles(articles.concat(parseData.articles));
        setLoading(false);
        setTotalResults(parseData.totalResults);

    }

    const updateNews=async()=>{
        props.setProgress(0);
        //let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let url=`https://api.newscatcherapi.com/v2/search?q=${props.category}&countries=${props.country}&page=${page}&page_size=${props.pageSize}`;
        setLoading(true);
        props.setProgress(30);
        let data= await fetch(url,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-api-key':'vQ6vl1L8Sj66v2eFrcQglAlDENE5NFRWjssBpO0lhRs'
            }
        });;
        props.setProgress(70);
        let parseData= await data.json();
        setArticles(parseData.articles);
        setLoading(false);
        setTotalResults(parseData.totalResults);
        
        props.setProgress(100);
    }

    useEffect(()=>{
        updateNews();
       // setPage(page+1);
    },[])


    return (
      <>
        <h2 className="text-center" style={{marginTop:'70px'}}>NewsDekho - Top Headlines in {(props.category).charAt(0).toUpperCase()+(props.category).slice(1)}</h2>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
        <div className="row">
            
        {articles.map((element)=>{
                return element.media?<div className="col-md-4" key={element.link}>
                <NewsItem title={element.title?element.title.slice(0,40):"Click on 'Read more' for more information"} description={element.summary?element.summary.slice(0,80):"Click on 'Read more' for more information"} img={element.media} newsUrl={element.link}
                author={element.author? element.author:"Unknown"} date={element.published_date} source={element.rights}/>
            </div>:null
            }
            )}
            </div>
        </div>
        </InfiniteScroll>
       
      </>
    )
  
}

News.defaultProp={
    country:'in',
    pageSize:6,
    category:'general'

}

News.propTypes={
    country: PropTypes.string ,
    pageSize:PropTypes.number,
    category:PropTypes.string

}

export default News