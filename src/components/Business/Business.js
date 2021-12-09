import React, { useEffect, useState } from 'react';
import BusinessCard from './BusinessCard';
import BusinessDetails from './BusinessDetails';
import './Business.css'
const Business = () => {
    const [Business, setBusiness] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9cc8803063464b298a1ddca78e967b2d')
            .then(res => res.json())
            .then(data => setBusiness(data.articles))
    }, [])

    const onBusinessSelected = (business) => {
        setDetails(business);
        console.log(business);
    }
    return (
        <div className="business">
            {
                details.length === 0 ? Business.map(business => <BusinessCard business={business} onBusinessSelected={onBusinessSelected} ></BusinessCard>) : <BusinessDetails business={details}></BusinessDetails>
            }
        </div>
    );
};

export default Business;