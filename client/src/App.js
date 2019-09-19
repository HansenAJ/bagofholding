import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.js'
import HomePage from './components/HomePage.js'
import PartyList from './components/PartyList.js'
import PartyBag from './components/PartyBag.js'
import PlayerPage from './components/PlayerPage.js'
import './App.css';

class App extends Component{
  render (){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HelloWorld}/>
            <Route exact path="/homepage" component={HomePage}/>
            <Route path="/partylist/:partyID" component={PartyList}/>
            <Route exact path="/partybag" component={PartyBag}/>
            <Route path="/playerpage/" component={PlayerPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


