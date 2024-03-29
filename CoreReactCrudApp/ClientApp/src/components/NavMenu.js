﻿import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
            <Navbar.Header>
                <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                </button>
          <Navbar.Brand>
            <Link to={'/'}>CordReactCrudApp</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>

          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
                    </LinkContainer>
             <LinkContainer to={'/userList'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' />User List
              </NavItem>
                    </LinkContainer>

                    <LinkContainer to={'/addUser'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' />Register User
              </NavItem>
                    </LinkContainer>
                </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}
