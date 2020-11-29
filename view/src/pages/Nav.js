import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Session from 'react-session-api';

import {connect} from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: this.props.user.isLogged,
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    console.log(this.state.isLogged)
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  logout =() => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('apply')
    Session.clear();
    this.setState({
      isLogged: false
    })
    this.props.user.isLogged=false
  }
  
  getToken = async (keyToken) => {
    const resultToken = await localStorage.getItem(keyToken)
    return resultToken;
  }

  componentDidMount(){

    this.getToken('token')
    .then(res => {
      if(res!==null){
      this.setState({
        isLogged: true
      })
    }
    })
  }
  render(){
    return (
      <div>
        <NavigationBar >
        <Navbar color="light" light expand="md">
          <NavbarBrand> <Link to="/" className='navBar'><strong>Recruithub</strong></Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.dropdownOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.isLogged &&(      
              <NavItem>
                <NavLink><Link to="/dashboard" className='navBar'>My Dashboard</Link></NavLink>
              </NavItem>
              )}
              <NavItem>
                <NavLink><Link to="/job" className='navBar'>Apply Now</Link></NavLink>
              </NavItem>
              {this.state.isLogged &&(
              <NavItem>
                <NavLink>
                  <Link to ='/' onClick={() => this.logout()} className='navBar'>Sign out</Link></NavLink>
              </NavItem> 
              )}
              {!this.state.isLogged &&(
              <React.Fragment>
                <NavItem>
                  <NavLink> <Link to="/signup" className='navBar'>Sign up</Link></NavLink>
                </NavItem>  
                <NavItem>
                  <NavLink> <Link to="/signin" className='navBar'>Sign in</Link></NavLink>
                </NavItem>  
              </React.Fragment>
              )}
               
          </Nav>
          </Collapse>
        </Navbar>
        </NavigationBar>
      </div>
    );
  }
}

const NavigationBar = styled.div`
  .navBar {
    color: #1f1f1e;
  }
`;

const mapStateProps = state => ({
  user: state.user
})

export default connect(mapStateProps)(Navigation);
