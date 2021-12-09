import React, { useEffect, useState } from 'react';
import TopHeadlinesCard from './TopHeadlinesCard';
import './TopHeadliens.css'
const TopHeadlines = () => {
    const [TopHeadlines, setTopHeadlines] = useState([]);
    const Headlines=TopHeadlines.slice(5,6);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=9cc8803063464b298a1ddca78e967b2d')
            .then(res => res.json())
            .then(data => setTopHeadlines(data.articles))
    },[])

    return (
        <div className="topnews">
            {
            Headlines.map(topHeadlines => <TopHeadlinesCard topHeadlines={topHeadlines} ></TopHeadlinesCard>)
            }
        </div>
    );
};


export default TopHeadlines;