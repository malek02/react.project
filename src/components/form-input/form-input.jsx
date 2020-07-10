import React from 'react'
import './form-input.scss';


export default function FormInput({label,handelchange,...otherProps}) {
    return (
        <div className="group">
        <input className="form-input" onChange={handelchange} 
        {...otherProps}/>
        {
            label ? 
            (<label className={`${
                otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
                </label>
                
                
                ) : null
        }
            
        </div>
    )
}

