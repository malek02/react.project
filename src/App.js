import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage';
import './App.css';
import {
  Switch,
  Route,
  } from 'react-router-dom';
import Shopepage from './pages/Shop/Shopepage';
import Header from './components/header.components/header'
import SigninUp from './pages/Sign-in.and.Sup/Signin-up';
import {auth} from './components/firebase/firebase'

class App extends Component {
  constructor(props) {
    super(props);
this.state={

  users:null
}
  }
subscribe=null
componentDidMount() {
    this.subscribe=   auth.onAuthStateChanged(async users=>{
      if(users){
        console.log('3',users)
      this.setState({users})}

  })


  }

  componentWillUnmount() {
    this.subscribe();
  }


  render() {
    console.log('2',this.state.users);
    return (
<>
<Header currentuser={this.state.users}/>

      <Switch>
      <Route exact path='/Signin' component={SigninUp} />
     <Route exact path='/' component={HomePage} />
     <Route exact path='/Shop' component={Shopepage} />
      </Switch>
      </>
    );
  }
}



export default App;