import React from 'react';
import NavBar from '../components/NavBar';
 

//smmoth scrolling for the buttons
// SLIDER
function Home(){
    let counter = 1;
    setInterval(function(){
    document.getElementById(`radio${counter}`).checked = true;
    counter++
    if(counter > 3) counter = 1
    }, 3000)
    return (
        <section id='home'>
            <NavBar />
            <div className="slider-wrapper">
                <div className="slides">
                   <input type="radio" name="radio-btn" id="radio1" />
                   <input type="radio" name="radio-btn" id="radio2" />
                   <input type="radio" name="radio-btn" id="radio3" />
  
                <div className="slide first">
                    <h1>YOUR SAFETY <br /><span>OUR RESPONSIBILTY</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, tempora at expedita dolorem consequuntur dolore dolorum id ducimus similique perferendis.</p>
                    <button className='btn-more btn-head'id="more">READ MORE</button>
                    <button  className='btn-quote btn-head' id="quote">GET A QUOTE</button>
                </div>
           
                <div className="slide">
                    <h1>YOUR SAFETY <br /><span>OUR RSPONSIBILTY</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, tempora at expedita dolorem consequuntur dolore dolorum id ducimus similique perferendis.</p>
                    <button className='btn-more btn-head'>READ MORE</button>
                    <button className='btn-quote btn-head'>GET A QUOTE</button> 
                </div>
                 <div className="slide">
                     <h1>YOUR SAFETY <br /><span>OUR RSPONSIBILTY</span></h1>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, tempora at expedita dolorem consequuntur dolore dolorum id ducimus similique perferendis.</p>
                      <button className='btn-more btn-head'>READ MORE</button>
                      <button  className='btn-quote btn-head'>GET A QUOTE</button>
                  </div>
                   {/* <!-- Navigation --> */}
                   <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                    </div>
                   <div className="navigation-manual">
                     <label htmlFor="radio1" className="manual-btn"></label>
                     <label htmlFor="radio2" className="manual-btn"></label>
                     <label htmlFor="radio3" className="manual-btn"></label>
                    </div>
               </div>
            </div>
        </section>
    );
}

export default Home;