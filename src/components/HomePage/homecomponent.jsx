import React from 'react'
import './homecomponent.scss';
import { withRouter } from 'react-router-dom';

const HomeComponent=({title,image,size,url,...otherProps}) =>{
    console.log(otherProps);
const {match,history}=otherProps;
    return (
        
      
            <div className={`${size} menu-item`}>
                <div className='background-image' style={{backgroundImage:`url(${image})`}}
                    onClick={()=>history.push(`${match.url}${url}`)}
                />
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <h5 className='subtitle'>SHOP NOW</h5>
                    </div>

                </div>
           
 
    )
}
export default withRouter(HomeComponent);