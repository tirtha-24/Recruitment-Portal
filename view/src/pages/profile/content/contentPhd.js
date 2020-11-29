import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import { API } from '../../../config';


import {
  Container, Button, Alert,
  Card, CardText, Form, FormGroup , Input, 
} from 'reactstrap'

import Session from 'react-session-api'
import{ Link } from 'react-router-dom'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faKey, faEnvelope, faSignInAlt, faUser, faPhone, faGenderless, faTransgender, faMale, faFemale, faUserTag, faSave } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import {getPhd_details,getPhd_sup} from '../../../redux/action/details';

class ContentPhd extends Component {
    constructor(props){
        super(props)
        this.state = {
          phd_university: Session.get('phd_university')===('null'||null)?"":Session.get('phd_university'),
          phd_subject: Session.get('phd_subject')===('null'||null)?"":Session.get('phd_subject'),
          phd_enr_date: Session.get('phd_enr_date')===('null'||null)?"":Session.get('phd_enr_date'),
          phd_award_date: Session.get('phd_award_date')===('null'||null)?"":Session.get('phd_award_date'),
          phd_cpi_cgpa: Session.get('phd_cpi_cgpa')===('null'||null)?"":Session.get('phd_cpi_cgpa'),
          phd_scale_cpi_cgpa: Session.get('phd_scale_cpi_cgpa')===('null'||null)?"":Session.get('phd_scale_cpi_cgpa'),

          phd_type: Session.get('phd_type')===('null'||null)?"Supervised":Session.get('phd_type'),
          phd_sole_guide: Session.get('phd_sole_guide')===('null'||null)?"":Session.get('phd_sole_guide'),
          phd_principal_guide: Session.get('phd_principal_guide')===('null'||null)?"":Session.get('phd_principal_guide'),
          phd_co_guide: Session.get('phd_co_guide')===('null'||null)?"":Session.get('phd_co_guide'),
         
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
        await this.props.dispatch(getPhd_details(id)).
        then(data=>{
            //console.log(data);
            console.log(data.action.payload.data.result); 
            if(data.action.payload.data.status===true){
                localStorage.setItem('phd_university',data.action.payload.data.result.university);
                localStorage.setItem('phd_subject',data.action.payload.data.result.subject);
                localStorage.setItem('phd_enr_date',new Date(data.action.payload.data.result.enr_date));
                localStorage.setItem('phd_award_date',data.action.payload.data.result.award_date);
                localStorage.setItem('phd_cpi_cgpa',data.action.payload.data.result.cpi_cgpa);
                localStorage.setItem('phd_scale_cpi_cgpa',data.action.payload.data.result.scale_cpi_cgpa);
           
                Session.set('phd_university',localStorage.getItem('phd_university'))
                Session.set('phd_subject',localStorage.getItem('phd_subject'))
                Session.set('phd_enr_date',localStorage.getItem('phd_enr_date'))
                Session.set('phd_award_date',localStorage.getItem('phd_award_date'))
                Session.set('phd_cpi_cgpa',localStorage.getItem('phd_cpi_cgpa'))
                Session.set('phd_scale_cpi_cgpa',localStorage.getItem('phd_scale_cpi_cgpa'))

                }
        })
        .catch(err => {
            console.log(err)
            //localStorage.setItem('personal',"err")
          })

          await this.props.dispatch(getPhd_sup(id)).
          then(data=>{
              //console.log(data);
              console.log(data.action.payload.data.result); 
              if(data.action.payload.data.status===true){
                 
                  localStorage.setItem('phd_type', data.action.payload.data.result.phd_type);
                  localStorage.setItem('phd_sole_guide', data.action.payload.data.result.sole_guide);
                  localStorage.setItem('phd_principal_guide', data.action.payload.data.result.principal_guide);
                  localStorage.setItem('phd_co_guide', data.action.payload.data.result.co_guide);
  
                  Session.set('phd_type',localStorage.getItem('phd_type'))
                  Session.set('phd_sole_guide',localStorage.getItem('phd_sole_guide'))
                  Session.set('phd_principal_guide',localStorage.getItem('phd_principal_guide'))
                  Session.set('phd_co_guide',localStorage.getItem('phd_co_guide'))
             
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

          const data={
            id:localStorage.getItem('email'),
            university:this.state.phd_university,
            subject:this.state.phd_subject,
            enr_date:this.state.phd_enr_date,
            award_date: this.state.phd_award_date,
            cpi_cgpa: this.state.phd_cpi_cgpa,
            scale_cpi_cgpa: this.state.phd_scale_cpi_cgpa,
            phd_type: this.state.phd_type,
            sole_guide: this.state.phd_sole_guide,
            principal_guide: this.state.phd_principal_guide,
            co_guide: this.state.phd_co_guide
          }
          console.log(data);

          axios({
            method: 'POST',
            url: `${API}/details/phd`,
            data: qs.stringify(data),
            headers : {
              'content-Type': 'application/x-www-form-urlencoded',
              'x-access-token': this.getToken(),
            }
          })
          .then(res => {
            
              const id=localStorage.getItem('email');
              this.getData(id);
      })
     
    }

      render() {
        console.log(this.state.phd_enr_date);
        return (
          <React.Fragment>
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
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>PHD Details</CardText> <br/>
    
                  <CardText className='inputData'>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >University<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="phd_university" 
                        placeholder="University"
                        value={this.state.phd_university}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Subject<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="phd_subject" 
                        placeholder="Subject"
                        value={this.state.phd_subject}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Enrollment Date<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="date" 
                        name="phd_enr_date" 
                        placeholder="Enrollment Date"
                        value={this.state.phd_enr_date}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Award Date<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="date" 
                        name="phd_award_date" 
                        placeholder="Award Date"
                        value={this.state.phd_award_date}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >CPI CGPA</label>
                      <Input 
                        type="text" 
                        name="phd_cpi_cgpa" 
                        placeholder="CPI CGPA"
                        value={this.state.phd_cpi_cgpa}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Scale CPI CGPA</label>
                      <Input 
                        type="text" 
                        name="phd_scale_cpi_cgpa" 
                        placeholder="Scale CPI CGPA"
                        value={this.state.phd_scale_cpi_cgpa}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                      <label className="col-sm-3 col-form-label" >PHD Type<span style={{color:'red'}}> *</span></label>
                       <select className="form-control" name="phd_type"  onChange={this.handleChange} value={this.state.phd_type} required>
                        <option>Supervised</option>
                        <option required>Supervising</option>
                       </select> 
                    </FormGroup>

                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Number of Sole Guides<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="number" 
                        name="phd_sole_guide" 
                        placeholder="Number of Sole Guides"
                        value={this.state.phd_sole_guide}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Number of Principal Guides<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="number" 
                        name="phd_principal_guide" 
                        placeholder="Number of Principal Guides"
                        value={this.state.phd_principal_guide}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Number of Co-Guides<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="number" 
                        name="phd_co_guide" 
                        placeholder="Number of Co-Guides"
                        value={this.state.phd_co_guide}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                
                   
                  
                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/academics"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   <Link to="/pastemployment"><Button  className="btn btn-primary">Next</Button></Link>
                  
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

export default connect(mapStateProps)(ContentPhd);