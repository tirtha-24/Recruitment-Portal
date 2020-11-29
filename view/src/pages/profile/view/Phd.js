/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Menu from '../core/Menu'
import Header from '../core/Header'
import ContentPhd from '../content/contentPhd'
import Session from 'react-session-api'

import{
  Alert
} from 'reactstrap'

import { Link } from 'react-router-dom'
import {connect} from 'react-redux';



class Phd extends Component {
  constructor(props){
    super(props)
    this.state ={
      isLogged: this.props.isLogged
    }
    //this.getData=this.getData.bind(this);
    Session.set('phd_university',localStorage.getItem('phd_university'))
    Session.set('phd_subject',localStorage.getItem('phd_subject'))
    Session.set('phd_enr_date',localStorage.getItem('phd_enr_date'))
    Session.set('phd_award_date',localStorage.getItem('phd_award_date'))
    Session.set('phd_cpi_cgpa',localStorage.getItem('phd_cpi_cgpa'))
    Session.set('phd_scale_cpi_cgpa',localStorage.getItem('phd_scale_cpi_cgpa'))
    Session.set('phd_type',localStorage.getItem('phd_type'))
    Session.set('phd_sole_guide',localStorage.getItem('phd_sole_guide'))
    Session.set('phd_principal_guide',localStorage.getItem('phd_principal_guide'))
    Session.set('phd_co_guide',localStorage.getItem('phd_co_guide'))
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
    Session.set('phd_university',localStorage.getItem('phd_university'))
    Session.set('phd_subject',localStorage.getItem('phd_subject'))
    Session.set('phd_enr_date',localStorage.getItem('phd_enr_date'))
    Session.set('phd_award_date',localStorage.getItem('phd_award_date'))
    Session.set('phd_cpi_cgpa',localStorage.getItem('phd_cpi_cgpa'))
    Session.set('phd_scale_cpi_cgpa',localStorage.getItem('phd_scale_cpi_cgpa'))

    Session.set('phd_type',localStorage.getItem('phd_type'))
    Session.set('phd_sole_guide',localStorage.getItem('phd_sole_guide'))
    Session.set('phd_principal_guide',localStorage.getItem('phd_principal_guide'))
    Session.set('phd_co_guide',localStorage.getItem('phd_co_guide'))
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
          <ContentPhd/>
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
  
export default connect(mapStateProps)(Phd);
