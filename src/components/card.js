import React from "react";

const Card = ({ name, image, description, dateLastEdited }) => {
  const date = new Date(dateLastEdited);

  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card__details">
        <div className="card__title">
          <p>{name}</p>
          <p>{date.toLocaleDateString()}</p>
        </div>
        <div className="card__description">
          <article>{description}</article>
        </div>
      </div>
    </div>
  );
};

export default Card;
