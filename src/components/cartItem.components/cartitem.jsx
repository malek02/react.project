import React from 'react'
import './cartitem.scss';
import Castumbattum from '../custom-battum/castum-battum';

export default function Cartitem({name,url,price}) {
    return (

        <div className='cart-item'>
        
            <img  src={url} alt='item'  />
            <Castumbattum> ADD TO COLLECTIONS</Castumbattum> 
            <div className='item-info'>
            <span>{name}</span>
            <span>${price}</span>
            </div>
           
  

        </div>
    )
}
