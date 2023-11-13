import React, { useState } from "react";
import "./Events.css";
import Menu from "./Menu";



const Card = () => {
  const [items, setItems] = useState(Menu);
  return (
    <div className="event__container grid">
    {items.map((elem) => {
      return (
        <div className="event__card" key={elem.id}>
          <div className="event__thumbnail">
            <div className="event__mask"></div>
            <img className="event__img" src={elem.image} alt={elem.title} />
          </div>
          
          <span className="event__category"> {elem.category}</span>
          <h3 className="event__title">{elem.title}</h3>
        </div>
      );
    })}
  </div>
  );
}

export default Card;



