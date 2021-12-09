import React, { useEffect, useState } from 'react';
import './NewsDetails.css'
import dateFormat from "dateformat";

import OtherNews from '../OtherNews/OtherNews';
const NewsDetails = (props) => {
    const { title, urlToImage, description, author } = props.news;

    var now = new Date();
    return (
        <div className="row">
            <div className="col-md-8">
                <div id="newsDetails">
                <h3>{title}</h3><br />
                    <img src={urlToImage}/>
                    <h5 id="author">{author}</h5>
                    <h5>{dateFormat(now, "dddd, mmmm dS, yyyy")}</h5>
                    <p id="description">{description}</p>
                    {/* <p>{content}</p> */}
                </div>
            </div>

            <div className="col-md-4">
                <OtherNews></OtherNews>
            </div>
        </div>
    );
};

export default NewsDetails;