import React from 'react';
import { Card } from 'react-bootstrap';
import './BusinessCard.css'
const BusinessCard = (props) => {
    const { title, urlToImage, description } = props.business;
    return (
        <div className="businessCard">
        <Card onClick={()=>props.onBusinessSelected(props.business)} style={{ width: '16rem', height: '23rem' }}>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                
            </Card.Body>
        </Card>
    </div>
    );
};

export default BusinessCard;