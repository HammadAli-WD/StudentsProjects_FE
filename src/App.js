import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap"
//import Navigation from "./components/Navigation"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
//import BackOffice from './components/BackOffice';
//import Edit from "./components/Edit"
//import Student from "./components/Student"

class App extends React.Component {


  render() {
    return (
      <Router>
        <div>



          <Switch>
            <Route path="/" exact component={HomePage} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
