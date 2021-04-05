import React from 'react'
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import LandingPage from './containers/LandingPage/LandingPage';
import Genres from './containers/Genres/Genres';
import AddGame from './containers/AddGame/AddGame';
import './App.css';
import Detail from './containers/Detail/Detail';

function App() {
  return (
    <div className={"App"}>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/games" render={() => <Home/> } />
      <Route exact path="/add" render={() => <AddGame/> } />
      <Route exact path="/genres" render={() => <Genres/>} />
      <Route exact path="/games/:id" render={() => <Detail />} />
    </div>
  );
}

export default App;
