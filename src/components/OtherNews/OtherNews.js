import React, { useEffect, useState } from 'react';
import OtherNewsCard from './OtherNewsCard';

const OtherNews = () => {
    const [OtherNews, setOtherNews] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9cc8803063464b298a1ddca78e967b2d')
    .then(res=>res.json())
    .then(data=>setOtherNews(data.articles))   
    }, [])
    const onOtherNewsSelected = (otherNews) => {
        setDetails(otherNews);
        console.log(otherNews);
    }
    return (
        <div>
            {
                OtherNews.map(otherNews => <OtherNewsCard otherNews={otherNews} onOtherNewsSelected={onOtherNewsSelected}></OtherNewsCard>)
            }
        </div>
    );
};

export default OtherNews;