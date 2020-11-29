/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Menu from '../core/Menu'
import Header from '../core/Header'
import ContentAddress from '../content/contentAddress'
import Session from 'react-session-api'

import{
  Alert
} from 'reactstrap'

import { Link } from 'react-router-dom'
import {connect} from 'react-redux';



class Address extends Component {
  constructor(props){
    super(props)
    this.state ={
      isLogged: this.props.isLogged
    }
    //this.getData=this.getData.bind(this);

    Session.set('p_add_line1',localStorage.getItem('p_add_line1'));
    Session.set('p_add_line2',localStorage.getItem('p_add_line2'));
    Session.set('p_city',localStorage.getItem('p_city'));
    Session.set('p_state',localStorage.getItem('p_state'));
    Session.set('p_pin',localStorage.getItem('p_pin'));
    Session.set('c_add_line1',localStorage.getItem('c_add_line1'));
    Session.set('c_add_line2',localStorage.getItem('c_add_line2'));
    Session.set('c_pin',localStorage.getItem('c_pin'));
    Session.set('c_city',localStorage.getItem('c_city'));
    Session.set('c_state',localStorage.getItem('c_state'));
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
          <ContentAddress/>
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
  
export default connect(mapStateProps)(Address);
