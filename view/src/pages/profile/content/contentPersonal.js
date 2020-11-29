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
import {getPersonal} from '../../../redux/action/details';

class ContentPersonal extends Component {
    constructor(props){
        super(props)
        this.state = {
          email: Session.get('email')===('null'||null)?"":Session.get('email'),
          salutation: Session.get('salutation')===('null'||null)?"":Session.get('salutation'),
          first_name: Session.get('first_name')===('null'||null)?"":Session.get('first_name'),
          middle_name: Session.get('middle_name')===('null'||null)?"":Session.get('middle_name'),
          last_name: Session.get('last_name')===('null'||null)?"":Session.get('last_name'),
          gender: Session.get('gender')===('null'||null)?"":Session.get('gender'),
          contact: Session.get('contact')===('null'||null)?"":Session.get('contact'),
          father_name: Session.get('father_name')===('null'||null)?"":Session.get('father_name'),
          mother_name: Session.get('mother_name')===('null'||null)?"":Session.get('mother_name'),
          dob: Session.get('dob')===('null'||null)?"":Session.get('dob'),
          mstatus: Session.get('mstatus')===('null'||null)?"":Session.get('mstatus'),
          category: Session.get('category')===('null'||null)?"":Session.get('category'),
          nationality: Session.get('nationality')===('null'||null)?"":Session.get('nationality'),
          pwd_status: Session.get('pwd_status')===('null'||null)?"":Session.get('pwd_status'),  
          pwd_percent: Session.get('pwd_percent')===('null'||null)?"":Session.get('pwd_percent'),
          alt_email: Session.get('alt_email')===('null'||null)?"":Session.get('alt_email'),
          alt_contact: Session.get('alt_contact')===('null'||null)?"":Session.get('alt_contact'),
          adhar_no: Session.get('adhar_no')===('null'||null)?"":Session.get('adhar_no'),
          pan_no: Session.get('pan_no')===('null'||null)?"":Session.get('pan_no'),
          exp_bpay: Session.get('exp_bpay')===('null'||null)?"":Session.get('exp_bpay'),
          exp_year: Session.get('exp_year')===('null'||null)?"":Session.get('exp_year'),
          spec_area: Session.get('spec_area')===('null'||null)?"":Session.get('spec_area'),
          curr_res_area: Session.get('curr_res_area')===('null'||null)?"":Session.get('curr_res_area'),
          data: {},
          isLogged: this.props.user.isLogged,
          message: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.showPWD = this.showPWD.bind(this) 
        this.getToken = this.getToken.bind(this) 
        this.getData = this.getData.bind(this) 
      }

      getData = async(id)=>{
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
        })
        .catch(err => {
            console.log(err)
            //localStorage.setItem('personal',"err")
          })
      }

      componentDidMount(){
        //this.getData()
      }

      showPWD=(event)=>{
        var pwd_percent = document.getElementsByClassName("pwd_percent");
        console.log(event)
        for (var i = 0; i < pwd_percent.length; i++) {
            if(event===1)
            {
            pwd_percent[i].style.display = "flex";
            pwd_percent[i].style.opacity= 1;
            }
            else if(event===0){
            pwd_percent[i].style.display = "none";
            pwd_percent[i].style.opacity= 0; 
            } 
            else if(event.target.value==="Yes")
            {
            pwd_percent[i].style.display = "flex";
            pwd_percent[i].style.opacity= 1;
            }
            else{
            pwd_percent[i].style.display = "none";
            pwd_percent[i].style.opacity= 0; 
            } 
        }
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
          const {
            email,
            salutation,
            first_name,
            middle_name,
            last_name,
            gender,
            contact,
            father_name,
            mother_name,
            dob,
            mstatus,
            category,
            nationality,
            pwd_status,
            pwd_percent,
            alt_email,
            alt_contact,
            adhar_no,
            pan_no,
            exp_bpay,
            exp_year,
            spec_area,
            curr_res_area
          } = this.state;

          const data={
            email,
            salutation,
            first_name,
            middle_name,
            last_name,
            gender,
            contact,
            father_name,
            mother_name,
            dob,
            mstatus,
            category,
            nationality,
            pwd_status,
            pwd_percent,
            alt_email,
            alt_contact,
            adhar_no,
            pan_no,
            exp_bpay,
            exp_year,
            spec_area,
            curr_res_area
          }

          axios({
            method: 'POST',
            url: `${API}/details/personal`,
            data: qs.stringify(data),
            headers : {
              'content-Type': 'application/x-www-form-urlencoded',
              'x-access-token': this.getToken(),
            }
          })
          .then(res => {
            
              const id=this.state.email
              this.getData(id);
      })
     
    }

      render() {
         console.log(Session.get('father_name'));
          //console.log(localStorage.getItem('personal').dob);
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
                  <CardText className='h3'>Personal Details</CardText> <br/>
    
                  <CardText className='inputData'>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                      <label className="col-sm-3 col-form-label" >Salutation<span style={{color:'red'}}> *</span></label>
                       <select className="form-control" name="salutation"  onChange={this.handleChange} value={this.state.salutation} required>
                        <option>Miss</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                        <option required>Mr.</option>
                        <option>Dr.</option>
                        <option>Prof.</option>
                       </select> 
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >First Name<span style={{color:'red'}}> *</span></label>
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
                    <label className="col-sm-3 col-form-label" >Middle Name</label>
                      <Input 
                        type="text" 
                        name="middle_name" 
                        placeholder="Middle Name"
                        value={this.state.middle_name}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Last Name</label>
                      <Input 
                        type="text" 
                        name="last_name" 
                        placeholder="Last Name"
                        value={this.state.last_name}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Father's Name</label>
                      <Input 
                        type="text" 
                        name="father_name" 
                        placeholder="Father's Name"
                        value={this.state.father_name}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Mother's Name</label>
                      <Input 
                        type="text" 
                        name="mother_name" 
                        placeholder="Mother's Name"
                        value={this.state.mother_name}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Date of Birth<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="date" 
                        name="dob" 
                        placeholder="Date of Birth"
                        value={this.state.dob}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Marital Status<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="mstatus" 
                        placeholder="Marital Status"
                        value={this.state.mstatus}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Gender<span style={{color:'red'}}> *</span></label>
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
                      <label className="col-sm-3 col-form-label" >Category<span style={{color:'red'}}> *</span></label>
                       <select className="form-control" name="category"  onChange={this.handleChange} value={this.state.category} required>
                        <option required>Select</option>
                        <option>GEN</option>
                        <option>OBC</option>
                        <option>SC</option>
                        <option>ST</option>
                       </select> 
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-2 inputForm" >
                    <label className="col-sm-3 col-form-label" >Nationality<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="nationality" 
                        placeholder="Nationality"
                        value={this.state.nationality}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >PWD Status<span style={{color:'red'}}> *</span></label>
                    <div onChange={this.handleChange} value={this.state.pwd_status} >
                        {(this.state.pwd_status === "Yes")&&
                            this.showPWD(1)}
                         {!(this.state.pwd_status === "Yes")&&
                            this.showPWD(0)}   
                    <input type="radio" onClick={this.showPWD} value="Yes" name="pwd_status" checked={this.state.pwd_status === "Yes"} required/> Yes&nbsp;&nbsp;
                    <input type="radio" onClick={this.showPWD} value="No" name="pwd_status" checked={this.state.pwd_status === "No"}/> No
                    </div >
                    </FormGroup>
                    <FormGroup className="pwd_percent mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >PWD Percent<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="pwd_percent" 
                        placeholder="PWD Percent"
                        value={this.state.pwd_percent}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Alternate Email</label>
                      <Input 
                        type="text" 
                        name="alt_email" 
                        placeholder="Alternate Email"
                        value={this.state.alt_email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Contact<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="contact" 
                        placeholder="Contact"
                        value={this.state.contact}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Alternate Contact</label>
                      <Input 
                        type="text" 
                        name="alt_contact" 
                        placeholder="Alternate Contact"
                        value={this.state.alt_contact}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Adhar Number</label>
                      <Input 
                        type="text" 
                        name="adhar_no" 
                        placeholder="Adhar Number"
                        value={this.state.adhar_no}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >PAN Number<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="pan_no" 
                        placeholder="PAN Number"
                        value={this.state.pan_no}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Experience Base Pay<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="number" 
                        name="exp_bpay" 
                        placeholder="Experience Base Pay"
                        value={this.state.exp_bpay}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Years of Experience<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="exp_year" 
                        placeholder="Years of Experience"
                        value={this.state.exp_year}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Specialization Area<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="spec_area" 
                        placeholder="Specialization Area"
                        value={this.state.spec_area}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Current Research Area</label>
                      <Input 
                        type="text" 
                        name="curr_res_area" 
                        placeholder="Current Research Area"
                        value={this.state.curr_res_area}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <Link className="nav-link"  to="/address"><Button>Next</Button></Link>
                  
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

export default connect(mapStateProps)(ContentPersonal);