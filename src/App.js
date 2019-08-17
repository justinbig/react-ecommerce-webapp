import React,{Component} from 'react';

import {Route,Switch} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {auth} from "./firebase/firebase.utils";


import './App.css';


class App extends Component {

   
      state = {
         currentUser : null
      }
      unsubsrcibe = null;
      componentDidMount () { //connection is always open
         this.unsubsrcibe =  auth.onAuthStateChanged((user) => {
             this.setState({currentUser : user});
             console.log(user)
          })
      }

      componentWillUnmount() { //closing connection to avoid memory leak
        this.unsubsrcibe();
      }
  
    render () {
      return (
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
              <Route path="/" exact component = {HomePage} />
              <Route path="/shop" exact component={ShopPage} />
              <Route path="/signin" exact component={SignInAndSignUp} />
              
          </Switch>
          <div>copyright2019</div>
        </div>
      )
    }
  
   }
   
    
 


export default App;
