import React, { useState } from "react";
import "./Events.css";

import Card from "./Card";

const Events = () => {

  return (
    <section className="events container section" id="events">
      <h2 className="section__title">Our Events</h2>

      <div className="events__filters">
        <span className="event__item">Event1</span>
       
      </div>
    <Card/>
    </section>
  );
};



export default Events;
