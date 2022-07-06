import React from 'react';

function Card({ onCardClick, title, link, likes }) {
  
  function handleClick() {
    onCardClick(title, link);
  }

  return (
    <li className="element">
      <button className="element__button-delete" type="button"></button>
      <img className="element__place-img" src={link} alt={title} onClick={handleClick} />
      <h3 className="element__title">{title}</h3>
      <button className="element__button-like" type="button"></button>
      <div className="element__button-like-number">{likes}</div>
  </li>
  );
}

export default Card;