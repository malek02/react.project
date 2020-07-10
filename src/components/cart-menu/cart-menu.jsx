import React from 'react'
import Cartitem  from '../cartItem.components/cartitem';
import './cart-menu.scss';

export default function CartMenu({title,subtitle,item}) {
    return (
        <div className="cat-menu">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <h4 className='subtitle'>{subtitle}</h4>
        <div className='items-pic'>
        {item.filter((item,i)=>i < 4 ).map(item=><Cartitem key={item.id}
        name={item.name}
        url={item.imageUrl}
        price={item.price} />)}
        </div>
        </div>
            
       
    )
}
