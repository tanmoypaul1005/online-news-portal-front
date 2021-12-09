import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './SportCard.css'
// import './NewsCard.css'
const SportCard = (props) => {
    const { title, urlToImage } = props.sports;
    return (
        <div id="sportCard">
        <Card onClick={() => props.onNewsSelected(props.sports)} style={{ width: '16rem', height: '23rem' }}>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>

            </Card.Body>
        </Card>
    </div>
    );
};

export default SportCard;