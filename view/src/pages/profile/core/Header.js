/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

import {
  Navbar, Nav, InputGroup,NavItem, 
  NavLink,Form, InputGroupAddon
} from 'reactstrap'

import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <Nav>
            <NavItem>
              <Link to="#" className="nav-link" data-widget="pushmenu" ><i className="fas fa-bars" /></Link>
            </NavItem>
            <NavItem className="d-none d-sm-inline-block">
              <NavLink><Link to="/">Home</Link></NavLink>
            </NavItem>
          </Nav>
          {/* SEARCH FORM */}
          <Form className="form-inline ml-3">
            <InputGroup className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <InputGroupAddon addonType="append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Right navbar links */}
          <Nav className="navbar-nav ml-auto">
            {/* Messages Dropdown Menu */}
            <NavItem>
              <NavLink> 
                <Link to='#'>
                  <i className="far fa-comments" />
                  <span className="badge badge-danger navbar-badge">0</span>
                </Link>
              </NavLink>
            </NavItem>
            {/* Notifications Dropdown Menu */}
            <NavItem>
              <NavLink> 
                <Link to='#'>
                  <i className="far fa-bell" />
                  <span className="badge badge-warning navbar-badge">0</span>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink> 
                <Link to='#'><i className="fas fa-th-large" /></Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
