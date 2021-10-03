import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import Checkout from "./Checkout";

function App() {
  if(localStorage.getItem("total")===null)
    localStorage.setItem("total",0);
  return (
    <div className="App">
      <div className="Background" />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
