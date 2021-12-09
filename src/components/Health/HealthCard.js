import React from 'react';
import './HealthCard.css'
import { Card } from 'react-bootstrap';
const HealthCard = (props) => {
    const { title, urlToImage } = props.health;
    return (
        <div className="healthCard">
        <Card onClick={()=>props.onHealthSelected(props.health)} style={{ width: '16rem', height: '23rem' }}>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                
            </Card.Body>
        </Card>
    </div>
    );
};

export default HealthCard;