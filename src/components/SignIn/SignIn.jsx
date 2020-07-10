import React, { Component } from 'react'
import FormInput from '../form-input/form-input';
import Castumbattum from '../custom-battum/castum-battum';
import './SignIn.scss'
export default class SignIn extends Component {
    state={
        email:"",
        password:""
        }
        handelchange=(e)=>{
           const {name,value}=e.target;
           this.setState({[name]:value})
           console.log(this.state);
        }
        handelSubmit=(e)=>{
            e.preventDefault();
            this.setState({email:'', password:''})

        }
    render() {
        return (
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <h4>Sign in with your email and password</h4>
            <form onSubmit={e=>this.handelSubmit(e)}>
            <FormInput name='email'
            value={this.state.email}
            label='email'
            required
            onChange={e=>this.handelchange(e)}/>
            <FormInput name='password'
            value={this.state.password}
            label='password'
            onChange={e=>this.handelchange(e)}
            />
            <div className='buttons'>
<Castumbattum type='submit' value='Submit Form'>
    Sign in
</Castumbattum>
</div>

            </form>
                
            </div>
        )
    }
}
