import React from "react";

const Card = ({ title, timeDuration, place, children }) => {
  return (
    <article>
      <div className="heading-container">
        <h3>{title}</h3>
        <time>
          <i className="fas fa-calendar-alt calendar-icon" /> {timeDuration}
        </time>
      </div>
      {children}
    </article>
  );
};

export default Card;
