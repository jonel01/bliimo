import Books from './books.jsx';
import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.css';

class App extends Component{  


  constructor(props){
    super(props);
    this.state={query : '',items : []};
    this.searching = this.searching.bind(this);
    this.changing = this.changing.bind(this);
    this.keypressing = this.keypressing.bind(this);
  }

  searching(event){
    let query = this.state.query;
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    fetch(url, {method:"GET"}).then(response => response.json()).then(json => {let {items} = json;
      // if(query==='undefined'|| event.query=== 'null'){
      //   alert('Please enter on the field');
      // }
      // if(event.query==='undefined' || event.query=== 'null'){
      //   alert('Please enter on the field');
      // }
    // else{
      this.setState({items : items})
    // }
})}

  changing(event){
    this.setState({query: event.target.value})
  }


  keypressing(event){
    if(event.key ==='Enter')
    this.searching();
  }
 
  
render(){ 
return (
<Router>
<div className="App">

    <nav className="nav-container">
            <ul className="nav-li-pos">
                <NavLink to="/books"><img id="logo" alt='icon' src={"https://i.imgur.com/Y5KWReV.png"}/></NavLink>  
                <li className="nav-list-item"><NavLink to="/books" exact activeStyle={
                {color: "darkturquoise", textTransform: "uppercase"}} className="nav-link" id="Home">Searching Books</NavLink></li>
                <li className="nav-list-item"><input type="text" placeholder="Search Books"
                name="search" id="books" className="search-bar" onChange={this.changing}
                onKeyPress={this.keypressing}/></li>
                <li className="nav-list-item"><button id="search-btn" onClick={this.searching} className="search-btn">Search</button></li>  
            </ul>
    </nav>
    <div id="result">
        <Books items={this.state.items} />
    </div>
    <div className="form">
    
    </div>
    
    <Route path="/books" exact strict render = {
    ()=> {return (
  
      <div className="">
            
      </div>
  )}
}/>
{/*End of Routing to 2nd Page of Home Page*/}


</div>
                  
</Router>
  );
}
}
export default App;
