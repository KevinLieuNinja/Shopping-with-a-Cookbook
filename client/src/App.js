import React from 'react';
import './App.css';
import AppWrapper from "./components/AppWrapper"
import { Router, Link } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";

import CreateList from './components/CreateList';
import RecipeWrapper from "./Recipes/RecipeWrapper"


function App() {  
  return (
    <div className="App">
        <Container className="p-0" fluid={true}>
          {/* //navbar on top */}
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Shopping With a Cookbook </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className='ml-auto'>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/grocery/ingredient/search">Recipes</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Router>
          <AppWrapper path="/" /> 
          <CreateList path="/grocery/:id" />
          <RecipeWrapper path="/grocery/:ingredient/search"/>
        </Router>
    </div>
  );
}

export default App;
