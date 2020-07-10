import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import Castumbattum from '../custom-battum/castum-battum';
import './Sign-up.scss';
import { auth, creatProfilDoc } from '../firebase/firebase';

export default class SignUp extends Component {
    state = {
        displayname: "",
        email: "",
        password: "",
        confirmpassword: "",
        user: null
    }
    handelchange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }
    handelSubmit = async (e) => {
        e.preventDefault();
        const { displayname, email, password, confirmpassword } = this.state



        if (password !== confirmpassword) {
            alert("your password dont match");
            return;
        }
        else {
            try {
                const { client } = {displayname, email};
console.log('777',client)
                await creatProfilDoc(client);
            } catch (error) {
                console.error(error);

            }
            this.setState({
                displayname: "",
                email: "",
                password: "",
                confirmpassword: "",
                user: null
            });

        }
    }

    render() {
        return (

            <div className='sign-up'>
                <h2>I wanna make a new account</h2>
                <h4>Sign up with your email and password</h4>
                <form onSubmit={e => this.handelSubmit(e)}>
                    <FormInput name='displayname'
                        value={this.state.displayname}
                        label='displayname'
                        required
                        onChange={e => this.handelchange(e)} />
                    <FormInput name='email' type='email'
                        value={this.state.email}
                        label='email'
                        required
                        onChange={e => this.handelchange(e)} />
                    <FormInput name='password' type='password'
                        value={this.state.password}
                        label='password'
                        onChange={e => this.handelchange(e)}
                    />
                    <FormInput name='confirmpassword' type='password'
                        value={this.state.confirmpassword}
                        label='confirm password'
                        onChange={e => this.handelchange(e)}
                    />

                    <div className='buttons'>
                        <Castumbattum signup type='submit' value='Submit Form'>
                            Sign up
</Castumbattum>
                    </div>
                </form>
            </div>
        )
    }
}
