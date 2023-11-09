import React from 'react';
import Guards from './Guards';
import information from '../info';


function guardArr(guard){
return (
    <Guards key={guard.id} img={guard.bgImg} name={guard.name} title={guard.job}  />
)
}
function Guard(){
return(
    <section className="section" id="guards">
    <div className="container">
        <h2 className='common-h2'>OUR GUARDS</h2>
        <p className='main-guard__p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sequi architecto, consectetur quia sunt laborum reiciendis sapiente? Cumque eveniet quo dicta, quis deleniti dolorem. Expedita!</p>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            {information.map(guardArr)}
        </div>
        <button className='btn-quote'>VIEW All</button>
    </div>
</section>
)
}

export default Guard;