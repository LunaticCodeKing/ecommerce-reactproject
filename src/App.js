import React,{useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./components/Firebase";
import { useStateValue } from './components/Stateprovider';
import './App.css';


function App() {

  const [{},dispatch] = useStateValue();
  
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('user is  >>> ', authUser);

        if(authUser){
            dispatch({
                type:'SET_USER',
                user: authUser
            })   
        }else{
            dispatch({
              type:'SET_USER',
              user:null
            })
         }
      })
  },[]);

  return (
    <Router>
      <div className="app">
         <Switch>
           <Route path="/login">
              <Login />
           </Route>
           <Route path="/checkout">
              <Header />
              <Checkout />
           </Route>
           <Route path="/">
              <Header />
              <Home />
           </Route>
         </Switch> 
      </div>
    </Router>
  );
}

export default App;
