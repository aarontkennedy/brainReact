import React/*, { Component }*/ from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Game from "./components/pages/Game";

const App = () => (
  <Router>
    <div className="App">
      <header className="container-fluid">
        <NavBar />
      </header>

      <section className="container-fluid">
        <Route exact path="/"  component={Home} />
        <Route exact path="/game/easy" render={(props) => <Game {...props} difficulty="easy" />} />
        <Route exact path="/game/medium" render={(props) => <Game {...props} difficulty="medium" />} />
        <Route exact path="/game/hard" render={(props) => <Game {...props} difficulty="hard" />} />
      </section>

      <footer className="container-fluid">
        <Footer />
      </footer>
    </div>
  </Router>
);


export default App;
