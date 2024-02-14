import React, { useState } from 'react';
import Slider from './Slider';
import testimonials from '../testimonial';

function slideInfo(slide) {
  return (
    <Slider
      key={slide.id}
      img={slide.slideImg}
      name={slide.slideName}
      text={slide.slideText}
    />
  )
}
function Carousel() {
  const [slideItemIndex, setSlideItemIndex] = useState(0)

  const rightArr = () => {
    const newIndex = slideItemIndex > 0 ? slideItemIndex - 1 : 0
    setSlideItemIndex(newIndex)
  }

  const leftArr = () => {
    const newIndex = slideItemIndex < 2 ? slideItemIndex + 1 : 2
    setSlideItemIndex(newIndex)
  }

  return (
    <section className="section">
      <h2 className="common-h2 carousel-h2">WHAT SAYS OUR CLIENTS</h2>
      <div className="slider-container">
        <div className="carousel">
          <div
            id="sliders"
            style={{ transform: `translate(${slideItemIndex * -33}%)` }}
          >
            {testimonials.map(slideInfo)}
          </div>
          <div className="controls">
            <button className="arrow left" onClick={leftArr}>
              <span className="">&larr;</span>
            </button>
            <button className="arrow right" onClick={rightArr}>
              <span className="">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
