import React from 'react';
import './TechnologyCard.css'
import { Card } from 'react-bootstrap';
const TechnologyCard = (props) => {
    const { title, urlToImage} = props.technology;
    return (
        <div id="technologyCard">
        <Card onClick={()=>props.onTechnologySelected(props.technology)} style={{ width: '16rem', height: '23rem' }}>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                
            </Card.Body>
        </Card>
    </div>
    );
};

export default TechnologyCard;