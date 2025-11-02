import React from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>{info}</p>
        <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
      </div>
    </article>
  );
};

export default Tour;
