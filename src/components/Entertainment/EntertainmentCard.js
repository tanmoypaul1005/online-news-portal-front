import React from 'react';
import { Card } from 'react-bootstrap';
import './EntertainmentCard.css'
const EntertainmentCard = (props) => {
    const { title, urlToImage } = props.entertainment;
    return (
        <div id="entertainmentCard">
        <Card onClick={()=>props.onEntertainmentSelected(props.entertainment)} style={{ width: '16rem', height: '23rem' }}>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                
            </Card.Body>
        </Card>
    </div>
    );
};

export default EntertainmentCard;