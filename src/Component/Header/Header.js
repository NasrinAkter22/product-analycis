import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (<>
    <Navbar bg="light" variant="light" >
      <Container >
        <Navbar.Brand >laptop mat</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/reviews" >Reviews</NavLink>
          <NavLink className="link" to="/dashbord" >Dashbord</NavLink>
          <NavLink className="link" to="/blog">Blog</NavLink>
          <NavLink className="link" to="/about">About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  </>
  )
};

export default Header;