import React from "react";

function Card(props) {
  return (
    <div className="feature col" id="card">
      <div className="card-img__container">
        <img src={props.img} id="card-img" alt="icon" />
      </div>
      <h3 className="fs-2 text-body-emphasis">{props.title}</h3>
      <p className="services-pr"> {props.text}</p>
      <button className="services-btn btn-quote">
        <a href="#" id="icon-link">
          {props.btn}
        </a>
      </button>
    </div>
  );
}

export default Card;
