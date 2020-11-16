import React, { useState } from 'react';
import './App.css';
import Beer from './component/beer';
import BeerList from "./component/beer_list";
// @ts-ignore
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import About from "./component/about";

function App(state: any) {
    //child to parent communication
    function handleSizeChanged(evt:number) {
        //setCount(evt.target.value);
        console.log((evt) + " is the number of beer that i like");
    }
  return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <nav>
                      <ul>
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                          <li>
                              <Link to="/about">About</Link>
                          </li>
                      </ul>
                  </nav>

                  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                  <Switch>
                      <Route path="/about">
                        <About author={"Maxime Beucher"}/>
                      </Route>
                      <Route path="/">
                          <BeerList onSizeChanged={handleSizeChanged} beers={["Maximator", "8.6", "Rince cochon"]}/>
                      </Route>
                  </Switch>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
