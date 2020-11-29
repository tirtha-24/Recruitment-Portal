/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Menu from '../core/Menu'
import Header from '../core/Header'
import ContentPersonal from '../content/contentPersonal'
import Session from 'react-session-api'

import{
  Alert
} from 'reactstrap'

import { Link } from 'react-router-dom'
import {connect} from 'react-redux';



class Personal extends Component {
  constructor(props){
    super(props)
    this.state ={
      isLogged: this.props.isLogged
    }
    //this.getData=this.getData.bind(this);

    Session.set('father_name',localStorage.getItem('father_name'))
    Session.set('mother_name',localStorage.getItem('mother_name'))
    Session.set('dob',localStorage.getItem('dob'))
    Session.set('mstatus',localStorage.getItem('mstatus'))
    Session.set('category',localStorage.getItem('category'))
    Session.set('nationality',localStorage.getItem('nationality'))
    Session.set('pwd_status',localStorage.getItem('pwd_status'))
    Session.set('pwd_percent',localStorage.getItem('pwd_percent'))
    Session.set('alt_email',localStorage.getItem('alt_email'))
    Session.set('alt_contact',localStorage.getItem('alt_contact'))
    Session.set('adhar_no',localStorage.getItem('adhar_no'))
    Session.set('pan_no',localStorage.getItem('pan_no'))
    Session.set('exp_bpay',localStorage.getItem('exp_bpay'))
    Session.set('exp_year',localStorage.getItem('exp_year'))
    Session.set('spec_area',localStorage.getItem('spec_area'))
    Session.set('curr_res_area',localStorage.getItem('curr_res_area'))
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
    console.log(localStorage.getItem('apply'))
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
        <>{!(localStorage.getItem('apply')==="yes")&&(
          <>
          <Header/>
          <Menu/>
          </>
          )}
          <ContentPersonal/>
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
  
export default connect(mapStateProps)(Personal);
