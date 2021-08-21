import React from "react";

const Card = ({ name, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card__description">
        <p>{name}</p>
        <article>{description}</article>
      </div>
    </div>
  );
};

export default Card;
