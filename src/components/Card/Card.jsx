import React from 'react';
import CardStyle from './CardStyle';

const Card = ({card}) => {

  return (
    <CardStyle>
      <div className="img">
        <img src={card.img} alt="img" width={206} height={166} className="card__img" />
      </div>
      <div className="info">
        <h3 className="title">{card.title}</h3>
        <p className="desc">{card.desc}</p>
      </div>
    </CardStyle>
  );
}

export default Card;
