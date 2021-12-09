import React, { useEffect, useState } from 'react';

import NewsCard from '../NewsCard/NewsCard';
import NewsDetails from '../NewsDetails/NewsDetails';
import './News.css'
import TopHeadlines from './../TopHeadlines/TopHeadlines';




const News = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9cc8803063464b298a1ddca78e967b2d')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])

    const [details, setDetails] = useState([]);
    const onNewsSelected = (news) => {
        console.log(news);
        setDetails(news);
    }

    return (
        <div>
              {
                  <TopHeadlines></TopHeadlines>
              }
             
        
        <div className="news">
            
           
            {
                
                details.length === 0 ? articles.map(ns => <NewsCard news={ns} onNewsSelected={onNewsSelected}></NewsCard>): <NewsDetails news={details} ></NewsDetails>
            }
      
        </div >
        </div>
       
    );
};

export default News;