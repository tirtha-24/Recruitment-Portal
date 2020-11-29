import React, { Component } from 'react'
import axios from 'axios'
import {
  Container, Button, Alert,
  Card, CardText, Form, FormGroup , Input, 
} from 'reactstrap'

import Navigation from '../Nav';
import Footer from '../Footer';

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Session from 'react-session-api'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faKey, faEnvelope, faSignInAlt, faUser, faPhone, faGenderless, faTransgender, faMale, faFemale, faUserTag } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import {register} from './../../redux/action/user';

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: Session.get,
      salutation:'',
      first_name:'',
      middle_name:'',
      last_name:'',
      password: '',
      gender:'',
      contact:'',
      data: {},
      isLogged: this.props.user.isLogged,
      message: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    console.log('Handle change ', event)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
   // console.log('masuk kesini kalau tidak ada token')
    const {
      email,
      salutation,
      first_name,
      middle_name,
      last_name,
      password,
      gender,
      contact
    } = this.state;

    const data = {
      email,
      salutation,
      first_name,
      middle_name,
      last_name,
      password,
      gender,
      contact
    }
   
    this.props.dispatch(register(data))
    .then(response => {
      if(response.action.payload.data.success === true) {
        this.props.history.push('/signin')
      } else {
        this.setState({
          message: response.action.payload.data.Message
        })
      }
    })
    .catch(err => {
      console.log('Registration error ', err);
    })

    event.preventDefault();
  }

  getToken = async (keyToken) => {
    const resultToken = await localStorage.getItem(keyToken)
    return resultToken;
  }

  componentDidMount(){
    this.getToken('token')
    .then(res => {
      if(res!==null){
     // console.log('Masuk kesini kalau punya token')
      this.setState({
        isLogged: true
      })
    }
    })
  }
  

  render() {
    return (
      <React.Fragment>
      <Navigation isLogged={this.state.isLogged}/>
      {/* {this.state.isLogged&&(
        <Container>
        <br/>
        <Alert color="danger">
          You have logged in. Please <strong>sign out</strong> first.
        </Alert>
      </Container>
      )} */}
      {!this.state.isLogged &&
        <Container>
          <br/>
          <Styled >
          <Card className='logForm'>
            <Form className='allCard' onSubmit={this.handleSubmit}><br/>
              <CardText className='messageReg'>{this.state.message}</CardText>  
              <CardText className='h3'>Create Account</CardText> <br/>
              <CardText>Get started with your free account</CardText> <br/>
              {/* <Link to='#' className='btn btn-primary'><span><FontAwesomeIcon icon={faImage}/>&nbsp; Sign up with Facebook</span> </Link>{' '}
              <Link to='#' className='btn btn-danger'><span><FontAwesomeIcon icon={faImage}/> &nbsp; Sign up with Google+</span> </Link> <br/><br/> */}
              {/* <CardText>OR</CardText> */}
              <CardText className='inputData'>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faEnvelope}/></span>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faUserTag}/></span>
                  <Input 
                    type="text" 
                    name="salutation" 
                    placeholder="Salutation"
                    value={this.state.salutation}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faUser}/></span>
                  <Input 
                    type="text" 
                    name="first_name" 
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faUser}/></span>
                  <Input 
                    type="text" 
                    name="middle_name" 
                    placeholder="Middle Name"
                    value={this.state.middle_name}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faUser}/></span>
                  <Input 
                    type="text" 
                    name="last_name" 
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faFemale}/></span>
                  <Input 
                    type="text" 
                    name="gender" 
                    placeholder="Gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faPhone}/></span>
                  <Input 
                    type="text" 
                    name="contact" 
                    placeholder="Contact"
                    value={this.state.contact}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faKey}/></span>
                  <Input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup><br/>
                <Button color='success' type='submit' block><span><FontAwesomeIcon icon={faSignInAlt}/>&nbsp;Create Account</span></Button><br/> 
               {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
              <CardText>Have an account? <Link to='/signin'>sign in</Link></CardText><br/>
              </CardText>
            </Form>
          </Card>
        <br/>
          </Styled>
        </Container>
      } 
      <Footer/>  
      </React.Fragment>  
        
    )
  }
}
const Styled = styled.div`
  .messageReg {
    color: #ff0000;
  }
  .logForm {
    text-align: center;
    width: 450px;
    margin: 0 auto;
    background-color: #f3f3f3;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
  .inputForm {
    display: flex;
    border: 1px solid #f3f3f3;
  }
  .inputData {
    padding: 0 10px;
  }
  .allCard {
    background-color: white;
  }
  .iconIn {
    width: 45px;
  }
`;

const mapStateProps = state => ({
  user: state.user
})

export default connect(mapStateProps)(SignUp);
