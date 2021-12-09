
import React from 'react';
import { Card } from 'react-bootstrap';
import './NewsCard.css'

const NewsCard = (props) => {
    const { title, urlToImage, description } = props.news;
    return (
        <div className="newscard m-3">
        <div>
        <Card className="bg-dark text-white  " onClick={() => props.onNewsSelected(props.news)} style={{ width: '31rem', height: '16rem' }}>
        <Card.Img src={urlToImage} alt="Card image" style={{ width: '34rem', height: '17rem' }} />
        <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
      {description }
    </Card.Text>
   
    </Card.ImgOverlay>
        </Card>
        </div>
        </div>
    );
};

export default NewsCard;