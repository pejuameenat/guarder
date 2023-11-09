import React from 'react';
import about from '../assets/about-img.jpg'

function About(){
    return(
        <section className='section' id="about">
            <div className="container">
                <div className="flex-container">
                    <div className="text">
                        <h2>WHO ARE WE?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur illo laudantium ratione, officia magni corporis sunt in iste eligendi unde nostrum quisquam enim praesentium dolore, dolores explicabo? Expedita, maxime?</p>
                        <button className='btn-quote btn-about'>READ MORE</button>
                    </div>
                    <div className="image">
                        <img src={about} alt="bodyguard" />
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default About;