import React, { useEffect, useState } from 'react';
import './Technology.css'
import TechnologyCard from './TechnologyCard';
import TechnologyDetails from './TechnologyDetails';
const Technology = () => {
    const [Technology, setTechnology] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9cc8803063464b298a1ddca78e967b2d')
    .then(res=>res.json())
    .then(data=>setTechnology(data.articles))  
    }, [])
    const onTechnologySelected = (technology) => {
        setDetails(technology);
        console.log(technology);
    }
    return (
        <div className="technology">
            {
                details.length===0 ? Technology.map(technology=><TechnologyCard technology={technology} onTechnologySelected={onTechnologySelected}></TechnologyCard>):<TechnologyDetails technology={details}></TechnologyDetails>
            }
        </div>
    );
};

export default Technology;