/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Jumbotron from '../components/home/Jumbotron'
import CardHome from '../components/home/CardHome'

import Navigation from './Nav';
import Footer from './Footer';

export default class Home extends Component {
  constructor(props){
    super(props)

    localStorage.setItem('apply',"no");
  }

  render() {
    return (
      <React.Fragment>
        <Navigation isLogged={this.props.isLogged}/>
          <Jumbotron />
          <CardHome />
        <Footer />
      </React.Fragment>
    )
  }
}