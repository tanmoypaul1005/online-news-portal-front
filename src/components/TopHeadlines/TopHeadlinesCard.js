import React from 'react';
const TopHeadlinesCard = (props) => {
    const { title, urlToImage, description } = props.topHeadlines;

    return (
        <div  style={{ width: '70rem', height: '22rem' }}>
        <div class="card" >
        <img src={urlToImage} class="card-img-top p-4" style={{ width: '65rem', height: '20rem' }} />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    
                </div>
            </div>
            </div>
            );
};
export default TopHeadlinesCard;