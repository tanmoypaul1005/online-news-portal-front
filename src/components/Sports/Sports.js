import React, { useEffect, useState } from 'react';
import SportDetails from '../SportDetails/SportDetails';
import SportCard from '../SportsCard/SportCard';
import './Sport.css'


const Sports = () => {
    const [Sports, setSports] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=9cc8803063464b298a1ddca78e967b2d')
      .then(res =>res.json())
      .then(data=>setSports(data.articles))
    }, [])

    const onNewsSelected = (sports) => {
        console.log(sports);
        setDetails(sports);
    }
    return (
        <div id="sport">
           {
                details.length === 0 ? Sports.map(sports => <SportCard sports={sports} onNewsSelected={onNewsSelected}></SportCard>): <SportDetails sports={details} ></SportDetails>
               
            }
        </div>
    );
};

export default Sports;