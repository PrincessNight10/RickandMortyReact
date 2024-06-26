// Card.js
import React from 'react';

function Card({ nameCharacter, imgCharacter, genderCharacter }) {
  return (
    <div className="card">
      <h2>{nameCharacter}</h2>
      <img src={imgCharacter} alt={nameCharacter} />
      <p>{genderCharacter}</p>
    </div>
  );
}

export default Card;
