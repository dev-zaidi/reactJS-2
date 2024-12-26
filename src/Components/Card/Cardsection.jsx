import React from 'react';
import Card from './Card.jsx'; // Import the Card component

const CardSection = ({ content }) => {
  return (  
    <div className="cardSection">
      {content.map((element, index) => (
        <Card key={index} { ...element} />
      ))}
    </div>
  );
};

export default CardSection;
 