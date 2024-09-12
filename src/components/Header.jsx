import React from 'react';
import email from '../assets/email.png'
import placeholder from '../assets/placeholder.png'
import telephone from '../assets/telephone.png'

export default function Header(){
    return( 
        <header>
           <div className="header-wrapper">
            <div className="header--1">
                <img src={placeholder} alt="location-pin" />
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="header--1">
                <img src={telephone} alt="phone" />
                <p>Call: +01 1234567890.</p>
            </div>
            <div className="header--1">
                <img src={email} alt="email" />
                <p>demo@gmail.com.</p>
            </div>
        </div>
    </header>
    );
}
