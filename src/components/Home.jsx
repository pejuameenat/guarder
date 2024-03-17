import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { slides } from '../info'

//smooth scrolling for the buttons
// SLIDER
function Home(props) {
  const { show, mobileNav } = props
  const [index, setIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState({
    radioBtn: 0,
  })
  function checkIndex(index) {
   const newIndex = index >= slides.length - 1 ? 0 : index + 1
   return newIndex
  }
  useEffect(() => {
    let intervalID = setInterval(function () {
      setIndex(prevIdex => checkIndex(prevIdex))
    }, 3000)
    return ()=> clearInterval(intervalID)
  }, [])

  const style = {
    transform:
      index === 0
        ? `translateX(${0}%)`
        : index === 1
        ? `translateX(${-100}%)`
        : index === 2
        ? `translateX(${-200}%)`
        : '',
  }

  function handleChange(e) {
    const { name, value } = e.target
    setSelectedOption((prevOpt) => ({ ...prevOpt, [name]: Number(value) }))
    setIndex(prevIdex =>checkIndex(prevIdex))
  }

  return (
    <section id="home">
      <NavBar show={show} mobileNav={mobileNav} />
      <div className="slider-wrapper">
        <div className="slides">
          <form id="radios">
            <input
              type="radio"
              name="radioBtn"
              id="radio1"
              checked={selectedOption.radioBtn === 1}
              onChange={handleChange}
              value="1"
            />
            <input
              type="radio"
              name="radioBtn"
              id="radio2"
              checked={selectedOption.radioBtn === 2}
              onChange={handleChange}
              value="2"
            />
            <input
              type="radio"
              name="radioBtn"
              id="radio3"
              checked={selectedOption.radioBtn === 3}
              onChange={handleChange}
              value="3"
            />
          </form>
          {slides.map((slide, i) => {
            return (
              <div className="slide" style={style} key={i}>
                <h1>
                  {slide.h1} <br /> <span>{slide.span}</span>
                </h1>
                <p>{slide.p} </p>
                <button className="btn-more btn-head">{slide.button1}</button>
                <button className="btn-quote btn-head">{slide.button2}</button>
              </div>
            )
          })}

          {/* <!-- Navigation --> */}
          <div className="navigation-manual">
            {slides.map((_, i) => {
              return (
                <label
                  key={i}
                  htmlFor={`radio${i + 1}`}
                  className={
                    index === i ? 'manual-btn activeLabel' : 'manual-btn'
                  }
                ></label>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
