import React,{useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { auth } from "./components/firebase";
import { useStateValue } from './components/StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './App.css';


const promise = loadStripe("pk_test_51HQofFC2xmNcIjOYrytzSBb0Ff2NHNwxnzxBb5Ipz9XivbENS7sfrmaTxIJa1cqFygrW7AnoMxcYv2UPn9wJavOa00RQuweMMg");



function App() {

  const [{},dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
         <Switch>
           <Route path="/orders">
              <Header />
              <Orders />
           </Route>
           <Route path="/login">
              <Login />
           </Route>
           <Route path="/checkout">
              <Header />
              <Checkout />
           </Route>
           <Route path="/payment">
              <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
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
