import React from 'react';


function Guards(props) {
    return(
        <div className="feature col" id="body-guards" >
            <div className="guard-item">
                <img src={props.img} alt="bodyguards" />
                <div className="overlay">
                    <h4>{props.name}</h4>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    )
    
}

export default Guards;
