import React from "react";
import Slider from "./Slider";
import testimonials from "../testimonial";

 
function slideInfo(slide) {
  return (
    <Slider
      key={slide.id}
      img={slide.slideImg}
      name={slide.slideName}
      text={slide.slideText}
    />
  );
}
function Carousel() {
  return (
    <section className="section">
      <h2 className='common-h2 carousel-h2'>WHAT SAYS OUR CLIENTS</h2>
      <div className="slider-container">
        <div className="carousel">
          <div className="sliders">{testimonials.map(slideInfo)}</div>
           <div className="controls">
               <span className="arrow left" onClick={leftArrFunc}>
              &larr;
              </span>
              <span className="arrow right" onClick={rightArrFunc}>
              &rarr;
             </span>
           </div>
        </div>
      </div>
    </section>
  );
}


// functionality for the arrow buttons
const slideBox = document.querySelector('.sliders');
let slideItemIndex = 0;
function rightArrFunc(){
  slideItemIndex = (slideItemIndex > 0) ? slideItemIndex - 1 : 0;
  slideBox.style.transform = `translate(${slideItemIndex * -33}%)`;
}

function leftArrFunc(){
  slideItemIndex = (slideItemIndex < 2) ? slideItemIndex + 1 : 2;
  slideBox.style.transform = `translate(${slideItemIndex * -33}%)`;
}
export default Carousel;
