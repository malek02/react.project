import React from 'react'
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/Sign-up/Sign-up';
import './Signin-up.scss';

export default function SigninUp() {
    return (
        <div className='page-sign'>
        <SignUp />
        <SignIn />
        
    </div>
    )
}
