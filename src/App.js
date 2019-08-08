import React,{Component} from 'react';

import {Route,Switch} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";


import './App.css';

const Hats = () => {
   return (
     <div>
       <h1>Hats details</h1>
     </div>
   )
}

class App extends Component {
    render () {
      return (
        <div>
          <Switch>
              <Route path="/" exact component = {HomePage} />
              <Route path="/hats" exact component={Hats} />
          </Switch>
        </div>
      )
    }
  
   }
   
    
 


export default App;
