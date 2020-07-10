import React from 'react';
import './casttum-battom.scss';

export default function Castumbattum({inverted,children,signup}) {
    return (
       
            <button className={`${inverted ? 'inverted':""} 
            ${signup ? 'sign-up':""} custtom-button`}>
                {children}
            </button>
        
    )
}
