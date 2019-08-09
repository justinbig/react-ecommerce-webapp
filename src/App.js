import React,{Component} from 'react';

import {Route,Switch} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";


import './App.css';


class App extends Component {
    render () {
      return (
        <div>
          <Switch>
              <Route path="/" exact component = {HomePage} />
              <Route path="/shop" exact component={ShopPage} />
          </Switch>
        </div>
      )
    }
  
   }
   
    
 


export default App;
