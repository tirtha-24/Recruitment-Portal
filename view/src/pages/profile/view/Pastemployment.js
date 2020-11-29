/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Menu from '../core/Menu'
import Header from '../core/Header'
import ContentPastemployment from '../content/contentPastemployment'
import Session from 'react-session-api'

import{
  Alert
} from 'reactstrap'

import { Link } from 'react-router-dom'
import {connect} from 'react-redux';



class Pastemployment extends Component {
  constructor(props){
    super(props)
    this.state ={
      isLogged: this.props.isLogged
    }
    //this.getData=this.getData.bind(this);
            
    Session.set('pastemployment',localStorage.getItem('pastemployment'))
  }

  getToken = async (keyToken) => {
    const resultToken = localStorage.getItem(keyToken)
    return resultToken;
  }
  

  componentWillMount(){
    this.getToken('token')
    .then(res => {
      if(res!==null){
      this.setState({
        isLogged: true
      })
    }
    })
    //this.getData(localStorage.getItem('email'))
  }
  componentDidMount(){
    
  }
  render() {
    //this.getData(localStorage.getItem('email'))
    return (
      <div>
        {!this.state.isLogged&&(
          <React.Fragment>
            <Alert color='danger'>
              <strong>Unauthorized</strong>. You must <Link to='/signin'>sign in</Link> first.
            </Alert>
          </React.Fragment>
        )}
        {this.state.isLogged&&(
        <>
          {!(localStorage.getItem('apply')==="yes")&&(
          <>
          <Header/>
          <Menu/>
          </>
          )}
          <ContentPastemployment/>
        </>
        )}
      </div>
    )
  }
}

const mapStateProps = state => ({
    user: state.user,
    details: state.details
  })
  
export default connect(mapStateProps)(Pastemployment);
