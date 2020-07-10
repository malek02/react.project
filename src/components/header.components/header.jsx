import React from 'react';
import {Link} from "react-router-dom";
import './header.scss';
import {ReactComponent as Logo} from '../svg/crown.svg.svg';
import {auth} from '../firebase/firebase';

const Header=({currentuser})=> {
    console.log('1',currentuser);
    return (
        <div className='top-header'>
        <Link  className='option' to='/'>
        <Logo />
        </Link>

        <div className='header'>
        
<Link  className='items' to='/Shop'>SHOP</Link>
<Link className='items'  to='/Shop'>CONTACT</Link>
{currentuser?
                    (<div className='items' onClick={()=>auth.signOut()}>Sign Out</div>)

                    : (
                        <Link className='items' to='/Signin'>Sign In</Link>)
                }
              
                {console.log('110', currentuser)}

           </div> 
        </div>
        
    )
}


export default Header;