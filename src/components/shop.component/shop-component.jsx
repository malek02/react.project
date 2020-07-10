import React from 'react'

import CartMenu from '../cart-menu/cart-menu';
import SHOP_DATA from '../../Shop.data.js';

export default function ShopComponent() {
    return (
        <div className='shop-component'>
         
         {SHOP_DATA.map(item=><CartMenu key={item.id}
             title={item.title}
             subtitle={item.routeName}
             item={item.items}
         />)}  
          
        </div>
    )
}
