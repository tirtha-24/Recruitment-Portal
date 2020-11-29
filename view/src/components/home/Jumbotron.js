/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container} from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import jumboImage from '../../assets/jumboBackground2.png'

const Styles = styled.div`
.jumbo {
  background: url(${jumboImage}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #1f1f1e;
  height: 375px;
  z-index: -2;
  text-decoration: none
}
.linkJumbo:hover {
  color: white;
  text-decoration: none
}`;

class Jumbotron extends Component{ 
  constructor(props) {
    super(props);
  }
  render(){return(
<Styles>
  <Jumbo fluid className='jumbo'>
      <Container>
        <br/>
        <h2>Find a job with our job site</h2><br/>
        <p className="lead">Your next role could be with a premiere institute in India</p>
        <p className="lead">Apply today. IIT(ISM) Dhanbad is recruiting</p>
        <p className="lead">
        {!this.props.user.isLogged&&
          (<Link to="/signup" className='btn btn-outline-secondary'>Free Sign Up</Link>)}
          <span>&nbsp;</span>
          <Link to="/job" className='btn btn-outline-secondary'>Apply Now</Link>
        </p>
      </Container>
  </Jumbo>
</Styles>
)}
        }
const mapStateProps = state => ({
  user: state.user
})

export default connect(mapStateProps)(Jumbotron);

// export default Jumbotron