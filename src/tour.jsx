import React from "react";

const Tour = ({ id, name, info, image, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Tour;
