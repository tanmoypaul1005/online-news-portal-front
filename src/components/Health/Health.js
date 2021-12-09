import React, { useEffect, useState } from 'react';
import './Health.css'
import HealthCard from './HealthCard';
import HealthDetails from './HealthDetails';
const Health = () => {
    const [Health, setHealth] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
       fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9cc8803063464b298a1ddca78e967b2d')
       .then(res=>res.json())
       .then(data=>setHealth(data.articles)) 
    }, [])
    const onHealthSelected = (health) => {
        setDetails(health);
        console.log(health)
    }
    return (
        <div id="health">
           {
               details.length===0?Health.map(health=><HealthCard health={health} onHealthSelected={onHealthSelected}></HealthCard>):<HealthDetails health={details}></HealthDetails>
           }
        </div>
    );
};

export default Health;