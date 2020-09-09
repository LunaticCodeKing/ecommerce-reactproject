import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
         <Switch>
           <Route path="/checkout">
              <Checkout />
           </Route>
           <Route path="/">
              <Home />
           </Route>
         </Switch> 
      </div>
    </Router>
  );
}

export default App;
