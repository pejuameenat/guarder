import React from 'react';
import Card from './Card'
import {information} from '../info';


function infoArrs(infoArr){
    return(
        <Card key={infoArr.id} img={infoArr.imgURL} title={infoArr.heading} text={infoArr.paragraph} btn={infoArr.btnText} />
    )
}
function Services(){
    return (
        <section className="section" id="services">
            <div className="container services-container" >
                <h2 className='common-h2'>OUR SERVICES</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 service-column">
                   {information.map(infoArrs)}
                </div>
            </div>
    </section>

    )
}

export default Services;