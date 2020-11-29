
import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import { API } from '../../../config';


import {
  Container, Button, Alert,
  Card, CardText, Form, FormGroup , Input, 
} from 'reactstrap'

import Session from 'react-session-api'

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faKey, faEnvelope, faSignInAlt, faUser, faPhone, faGenderless, faTransgender, faMale, faFemale, faUserTag, faSave } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import {getPreemployment} from '../../../redux/action/details';
import{ Link } from 'react-router-dom'

class ContentPreemployment extends Component {
    constructor(props){
        super(props)
        this.state = {
          id: Session.get('email'),
          designation: Session.get('pre_designation')===('null'||null)?'':Session.get('pre_designation'),
          organization: Session.get('pre_organization')===('null'||null)?'':Session.get('pre_organization'),
          doj: Session.get('pre_doj')===('null'||null)?'':Session.get('pre_doj'),
          pay_scale: Session.get('pre_pay_scale')===('null'||null)?'':Session.get('pre_pay_scale'),
          b_pay: Session.get('pre_b_pay')===('null'||null)?'':Session.get('pre_b_pay'),
          total_emo: Session.get('pre_total_emo')===('null'||null)?'':Session.get('pre_total_emo'),
          data: {},
          isLogged: this.props.user.isLogged,
          message: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getToken = this.getToken.bind(this) 
        this.getData = this.getData.bind(this) 
      }

      getData = async(id)=>{
        await this.props.dispatch(getPreemployment(id)).
        then(data=>{
            //console.log(data);
            console.log(data.action.payload.data.result); 
            if(data.action.payload.data.status===true){
                localStorage.setItem('pre_designation',data.action.payload.data.result.designation);
                localStorage.setItem('pre_organization',data.action.payload.data.result.organization);
                localStorage.setItem('pre_doj',data.action.payload.data.result.doj);
                localStorage.setItem('pre_pay_scale',data.action.payload.data.result.pay_scale);
                localStorage.setItem('pre_b_pay',data.action.payload.data.result.b_pay);
                localStorage.setItem('pre_total_emo',data.action.payload.data.result.total_emo);
               
        
                Session.set('pre_designation',localStorage.getItem('pre_designation'))
                Session.set('pre_organization',localStorage.getItem('pre_organization'))
                Session.set('pre_doj',localStorage.getItem('pre_doj'))
                Session.set('pre_pay_scale',localStorage.getItem('pre_pay_scale'))
                Session.set('pre_b_pay',localStorage.getItem('pre_b_pay'))
                Session.set('pre_total_emo',localStorage.getItem('pre_total_emo'))


                }
        })
        .catch(err => {
            console.log(err)
            //localStorage.setItem('personal',"err")
          })
      }

      componentDidMount(){
        //this.getData()
      }

      getToken =  () => {
        const resultToken = localStorage.getItem('token')
        return resultToken;
      }

      handleChange = (event) => {
        console.log('Handle change ', event.target.value)
        this.setState({
          [event.target.name]: event.target.value,
        })
      }

      handleSubmit = (event) => {
        event.preventDefault();

          const preemployment={
              id: Session.get('email'),
              designation: this.state.designation,
              organization: this.state.organization,
              doj: this.state.doj,
              pay_scale: this.state.pay_scale,
              b_pay: this.state.b_pay,
              total_emo: this.state.total_emo,

          };

          const data={
           preemployment:JSON.stringify(preemployment),
           id: Session.get('email')
          }

          axios({
            method: 'POST',
            url: `${API}/details/preemployment`,
            data: qs.stringify(data),
            headers : {
              'content-Type': 'application/x-www-form-urlencoded',
              'x-access-token': this.getToken(),
            }
          })
          .then(res => {
              const id= Session.get('email')
              this.getData(id);
      })
     
    }

      render() {
   
        return (
          <React.Fragment>
          {!this.state.isLogged &&
            <Container>
              <br/>
              <Styled >
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>Pre Employment</CardText> <br/>
    
                  <CardText className='inputData'>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Designation<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="designation" 
                        placeholder="Designation"
                        value={this.state.designation}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Organization<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="organization" 
                        placeholder="Organization"
                        value={this.state.organization}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Date of Joining<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="date" 
                        name="doj" 
                        placeholder="Date of Joining"
                        value={this.state.doj}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Pay Scale<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="number" 
                        name="pay_scale" 
                        placeholder="Pay Scale"
                        value={this.state.pay_scale}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Base Pay<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="number" 
                        name="b_pay" 
                        placeholder="Base Pay"
                        value={this.state.b_pay}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Total EMO<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="NUMBER" 
                        name="total_emo" 
                        placeholder="Total EMO"
                        value={this.state.total_emo}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                  
                    
                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/pastemployment"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   <Link to="/adminexperience"><Button  className="btn btn-primary">Next</Button></Link>
                  
                  </CardText>
                </Form>
              </Card>
            <br/>
              </Styled>
            </Container>
          } 
          </React.Fragment>  
            
        )
      }
}

const Styled = styled.div`
  .pwd_percent {
    opacity: 0;
    display: none;
  }
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
  user: state.user,
  details: state.details
})

export default connect(mapStateProps)(ContentPreemployment);