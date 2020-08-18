import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shoppage.component'; 
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'

import { Header } from './components/header/header.component'; 

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged (user => {
      this.setState({ currentUser: user});

      console.log(user);
    })
  }

  // Unsubscribe from auth when the component is unmounted to avoid memory leaks
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header user={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ ShopPage } />
          <Route path='/signin' component={ SignInAndSignUp } />
        </Switch>
  
      </div>
  
    );

  }
  
}

export default App;
