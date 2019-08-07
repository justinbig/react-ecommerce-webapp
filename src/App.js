import React,{Component} from 'react';

import {CardList} from "./components/card-list/card-list.component";

import {SearchBox} from "./components/searchBox/search-box.component";

import './App.css';


class App extends Component {

   state = {
     monsters : [] ,
     searchField : ""
      
     
  } 

  onSearchHandler = (e) => {
     this.setState({searchField : e.target.value})
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({monsters : users}))
  }
   render () {
     const {monsters,searchField} = this.state;
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
          
          <SearchBox 
             placeholder="search monsters" 
             type="search"
             onSearchHandler = {this.onSearchHandler}
           />
         <CardList monsters = {filteredMonster} />
      </div>
    );
   }
   
    
 
}

export default App;
