import React, {useEffect, useState } from 'react';

import EntertainmentCard from './EntertainmentCard';
import './Entertainment.css'
import EntertainmentDetils from './EntertainmentDetils';
const Entertainment = () => {
const [Entertainment, setEntertainment] = useState([]);
const [details, setDetails] = useState([]);

useEffect(() => {
 fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9cc8803063464b298a1ddca78e967b2d')
 .then(res=>res.json())
 .then(data=>setEntertainment(data.articles))
}, [])

const onEntertainmentSelected=(entertainment)=>{
setDetails(entertainment);
console.log(entertainment);
}
    return (
        
        <div className="entertainment">
            {
              details.length === 0 ? Entertainment.map(entertainment=><EntertainmentCard entertainment={entertainment} onEntertainmentSelected={onEntertainmentSelected}></EntertainmentCard>):
              <EntertainmentDetils entertainment={details} ></EntertainmentDetils>
            }
        </div>
    );
};

export default Entertainment;