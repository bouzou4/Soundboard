import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  render() {
    return(
      <Navbar collapseOnSelect fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">SoundBoard</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>  
          <Nav>
            <NavItem eventKey={1} href="#about">
              About
            </NavItem>
            <NavItem eventKey={2} href="#account">
              Account
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#logout">
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}