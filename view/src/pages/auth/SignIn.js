import React, { Component } from 'react'
import Session from 'react-session-api'


import {
  Container, Button, Alert,
  Card, CardText, Form, FormGroup, Input,
} from 'reactstrap'

import Navigation from '../Nav';
import Footer from '../Footer';

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faKey, faEnvelope, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import {login} from './../../redux/action/user';
import {getPersonal, getAddress, getAcademics, getAdminexperience, getConsultancyprojects,
getFacultymobilityprog, getHandwritten, getInnovproddev, getOtherinfo, getQualityresearchpublications, getOutreachyprojects, getPastemployment,
getPatent, getPhd_details, getPhd_sup, getPreemployment, getProfessionalbodies, getPublications, getRdprojects, getReference, getSpecialawards, getUpload, getStates,getDepartments} from '../../redux/action/details';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      // logError:'',
      // isLogged:this.props.isLogged,
      isLogged: this.props.user.isLogged,
      isLoading: false,
      isError: false,
      data : {},
      message: ''
    }
   // console.log(this.state.isLogged)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    localStorage.clear();
    Session.clear();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  getPersonal = async(id)=>{
    await this.props.dispatch(getPersonal(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
            localStorage.setItem('father_name',data.action.payload.data.result.father_name);
            localStorage.setItem('mother_name',data.action.payload.data.result.mother_name);
            localStorage.setItem('dob',new Date(data.action.payload.data.result.dob));
            localStorage.setItem('mstatus',data.action.payload.data.result.mstatus);
            localStorage.setItem('category',data.action.payload.data.result.category);
            localStorage.setItem('nationality',data.action.payload.data.result.nationality);
            localStorage.setItem('pwd_status',data.action.payload.data.result.pwd_status);
            localStorage.setItem('pwd_percent',data.action.payload.data.result.pwd_percent);
            localStorage.setItem('alt_email',data.action.payload.data.result.alt_email);
            localStorage.setItem('alt_contact',data.action.payload.data.result.alt_contact);
            localStorage.setItem('adhar_no',data.action.payload.data.result.adhar_no);
            localStorage.setItem('pan_no',data.action.payload.data.result.pan_no);
            localStorage.setItem('exp_bpay',data.action.payload.data.result.exp_bpay);
            localStorage.setItem('exp_year',data.action.payload.data.result.exp_year);
            localStorage.setItem('spec_area',data.action.payload.data.result.spec_area);
            localStorage.setItem('curr_res_area',data.action.payload.data.result.curr_res_area);
           
            localStorage.setItem('name', data.action.payload.data.result.name);
            localStorage.setItem('first_name', data.action.payload.data.result.first_name);
            localStorage.setItem('middle_name', data.action.payload.data.result.middle_name);
            localStorage.setItem('last_name', data.action.payload.data.result.last_name);
            localStorage.setItem('salutation', data.action.payload.data.result.salutation);
            localStorage.setItem('contact', data.action.payload.data.result.contact);
            localStorage.setItem('gender', data.action.payload.data.result.sex);
    
            }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getStates = async()=>{
    await this.props.dispatch(getStates()).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.data); 
        localStorage.setItem('states',JSON.stringify(data.action.payload.data.data));
        Session.set('states',localStorage.getItem('states'));
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getDepartments = async()=>{
    await this.props.dispatch(getDepartments()).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.data); 
        localStorage.setItem('depts',JSON.stringify(data.action.payload.data.data));
        Session.set('depts',localStorage.getItem('depts'));
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getAddress = async(id)=>{
    await this.props.dispatch(getAddress(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
            localStorage.setItem('p_add_line1',data.action.payload.data.result.p_add_line1);
            localStorage.setItem('p_add_line2',data.action.payload.data.result.p_add_line2);
            localStorage.setItem('p_city',data.action.payload.data.result.p_city);
            localStorage.setItem('p_state',data.action.payload.data.result.p_state);
            localStorage.setItem('p_pin',data.action.payload.data.result.p_pin);
            localStorage.setItem('c_add_line1',data.action.payload.data.result.c_add_line1);
            localStorage.setItem('c_add_line2',data.action.payload.data.result.c_add_line2);
            localStorage.setItem('c_pin',data.action.payload.data.result.c_pin);
            localStorage.setItem('c_city',data.action.payload.data.result.c_city);
            localStorage.setItem('c_state',data.action.payload.data.result.c_state);
    
            }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getAcademics = async(id)=>{
    await this.props.dispatch(getAcademics(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
        localStorage.setItem('academics',JSON.stringify(data.action.payload.data.result));
        console.log(localStorage.getItem('academics'))
        Session.set('academics',localStorage.getItem('academics'));
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }
  
  getPhd_details = async(id)=>{
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
         
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getPhd_sup = async(id)=>{
    await this.props.dispatch(getPhd_sup(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('phd_type', data.action.payload.data.result.phd_type);
          localStorage.setItem('phd_sole_guide', data.action.payload.data.result.sole_guide);
          localStorage.setItem('phd_principal_guide', data.action.payload.data.result.principal_guide);
          localStorage.setItem('phd_co_guide', data.action.payload.data.result.co_guide);
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getPastemployment = async(id)=>{
    await this.props.dispatch(getPastemployment(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('pastemployment',JSON.stringify(data.action.payload.data.result));
            
          Session.set('pastemployment',localStorage.getItem('pastemployment'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getPreemployment = async(id)=>{
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
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getAdminexperience = async(id)=>{
    await this.props.dispatch(getAdminexperience(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('adminexperience',JSON.stringify(data.action.payload.data.result));
            
          Session.set('adminexperience',localStorage.getItem('adminexperience'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getConsultancyprojects = async(id)=>{
    await this.props.dispatch(getConsultancyprojects(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('consultancyprojects',JSON.stringify(data.action.payload.data.result));
            
          Session.set('consultancyprojects',localStorage.getItem('consultancyprojects'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getRdprojects = async(id)=>{
    await this.props.dispatch(getRdprojects(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('rdprojects',JSON.stringify(data.action.payload.data.result));
            
          Session.set('rdprojects',localStorage.getItem('rdprojects'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getOutreachyprojects = async(id)=>{
    await this.props.dispatch(getOutreachyprojects(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('outreachyprojects',JSON.stringify(data.action.payload.data.result));
            
          Session.set('outreachyprojects',localStorage.getItem('outreachyprojects'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getProfessionalbodies = async(id)=>{
    await this.props.dispatch(getProfessionalbodies(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('professionalbodies',JSON.stringify(data.action.payload.data.result));
            
          Session.set('professionalbodies',localStorage.getItem('professionalbodies'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getPublications = async(id)=>{
    await this.props.dispatch(getPublications(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('publications',JSON.stringify(data.action.payload.data.result));
            
          Session.set('publications',localStorage.getItem('publications'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getPatent = async(id)=>{
    await this.props.dispatch(getPatent(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('patent',JSON.stringify(data.action.payload.data.result));
            
          Session.set('patent',localStorage.getItem('patent'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getReference = async(id)=>{
    await this.props.dispatch(getReference(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('reference',JSON.stringify(data.action.payload.data.result));
            
          Session.set('reference',localStorage.getItem('reference'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getSpecialawards = async(id)=>{
    await this.props.dispatch(getSpecialawards(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('specialawards',JSON.stringify(data.action.payload.data.result));
            
          Session.set('specialawards',localStorage.getItem('specialawards'))
        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getUpload = async(id)=>{
    await this.props.dispatch(getUpload(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('sign',data.action.payload.data.result[1].d_path);
          localStorage.setItem('photo',data.action.payload.data.result[0].d_path);
  
          Session.set('sign',localStorage.getItem('sign'))
          Session.set('photo',localStorage.getItem('photo'))

        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }


  getHandwritten = async(id)=>{
    await this.props.dispatch(getHandwritten(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('handwritten',data.action.payload.data.result.d_path);
    
          Session.set('handwritten',localStorage.getItem('handwritten'))

        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }

  getOtherinfo= async(id)=>{
    await this.props.dispatch(getOtherinfo(id)).
    then(data=>{
        //console.log(data);
        console.log(data.action.payload.data.result); 
        if(data.action.payload.data.status===true){
          localStorage.setItem('any_other_info',data.action.payload.data.result.any_other_info);

        }
    })
    .catch(err => {
        console.log(err)
        //localStorage.setItem('personal',"err")
      })
  }


  handleSubmit = (event) => {
    const { email, password } = this.state;
    const data = {email, password}
    this.props.dispatch(login(data))
      .then(response => {
        console.log(response)
        if(response.action.payload.data.success === true){
          const expirationDate = new Date(new Date().getTime() + 6000 * 1000);
          localStorage.setItem('token', response.action.payload.data.token);
          localStorage.setItem('name', response.action.payload.data.data.name);
          localStorage.setItem('first_name', response.action.payload.data.data.first_name);
          localStorage.setItem('middle_name', response.action.payload.data.data.middle_name);
          localStorage.setItem('last_name', response.action.payload.data.data.last_name);
          localStorage.setItem('salutation', response.action.payload.data.data.salutation);
          localStorage.setItem('contact', response.action.payload.data.data.contact);
          localStorage.setItem('gender', response.action.payload.data.data.gender);
          localStorage.setItem('email', response.action.payload.data.data.email);
         // localStorage.setItem('personal', response.action.payload.data.details.personal);
          //console.log(response.action.payload.data.details);
          localStorage.setItem('expirationDate', expirationDate);

          Session.set('email',localStorage.getItem('email'));
        
          this.getPersonal(this.state.email)
          this.getStates()
          this.getDepartments()
          this.getAddress(this.state.email)
          this.getAcademics(this.state.email)
          this.getPhd_details(this.state.email)
          this.getPhd_sup(this.state.email)
          this.getPastemployment(this.state.email)
          this.getPreemployment(this.state.email)
          this.getAdminexperience(this.state.email)
          this.getConsultancyprojects(this.state.email)
          this.getRdprojects(this.state.email)
          this.getOutreachyprojects(this.state.email)
          this.getProfessionalbodies(this.state.email)
          this.getPublications(this.state.email)
          this.getPatent(this.state.email)
          this.getReference(this.state.email)
          this.getSpecialawards(this.state.email)
          this.getUpload(this.state.email)
          this.getHandwritten(this.state.email)
          this.getOtherinfo(this.state.email)

          Session.set('expirationDate',localStorage.getItem('expirationDate'))
          Session.set('token',localStorage.getItem('token'))
          Session.set('name',localStorage.getItem('name'))

          //console.log(localStorage.getItem('name'));
          this.props.history.push('/')
        } else {
          this.setState({
            message: response.action.payload.data.message
          })
        }
      })
      .catch(err => {
        console.log('Login error ', err);
      })
    event.preventDefault();
  }

  // logout =() => {
  //   localStorage.removeItem('token')
  //   this.setState({
  //     isLogged: false,
  //   })
  // }
  
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
      this.props.user.isLogged=true
    }
    })
    localStorage.clear();
    Session.clear();
  }


  render() {
    return (
      <React.Fragment>    
      <Navigation isLogged={this.state.isLogged}/>
      {/* {(this.state.isLogged)&&(
        <Container>
          <br/>
          <Alert color="danger">
            You have logged in. Please <strong><Link onClick={()=>this.logout()}>sign out</Link></strong> first.
          </Alert>
        </Container>
      )} */}
      {console.log(this.props.user.isLogged)}
      {(!this.state.isLogged) &&
        <Container>
          <br/>
          <Styled >
          <Card className='logForm'>
            <Form className='allCard' onSubmit={this.handleSubmit}><br/>
              <CardText className='h3'>Sign in</CardText> <br/>
              {/* <Link to='#' className='btn btn-primary'><span><FontAwesomeIcon icon={faImage}/>&nbsp; Sign in with Facebook</span> </Link>{' '}
              <Link to='#' className='btn btn-danger'><span><FontAwesomeIcon icon={faImage}/> &nbsp; Sign in with Google+</span> </Link> <br/><br/> */}
              {/* <CardText>OR</CardText> */}
              <CardText className='inputData'>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faEnvelope}/></span>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    className='inputFil'
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-2 mb-sm-0 inputForm" >
                  <span className='input-group-prepend input-group-text iconIn'><FontAwesomeIcon icon={faKey}/></span>
                  <Input 
                  type="password" 
                  name="password" 
                  placeholder="Password"
                  className='inputFil'
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                </FormGroup><br/>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" name="remember" className="custom-control-input" tabIndex="3" id="remember-me"/>
                      <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                    </div>
                </div>

                <Button color='success' type='submit' block><span><FontAwesomeIcon icon={faSignInAlt}/>&nbsp;Sign in</span></Button><br/>
                <CardText className='messageLogin'>{this.state.message}</CardText>
                <Link to='/'>Reset your password</Link><br/><hr/>
                <Link to='/signup' className='btn btn-primary btn-block '><span><FontAwesomeIcon icon={faUserPlus}/>&nbsp;Sign up New Account</span> </Link>{' '}
              </CardText>
            </Form><br/>
          </Card>
          <br/>
          </Styled>
        </Container>
        }
      <Footer />
      </React.Fragment>
    
    )
  }
}

const Styled = styled.div`
  .messageLogin {
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

export default connect(mapStateProps)(Login);
