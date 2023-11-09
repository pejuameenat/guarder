import React from "react";


function Slider(props) {
  return (
      <div className="slide-item active">
        <img src={props.img} alt="avatar" />
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
  );
}

export default Slider;
