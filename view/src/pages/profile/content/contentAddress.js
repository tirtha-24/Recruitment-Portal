
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
import {getAddress} from '../../../redux/action/details';

class ContentAddress extends Component {
    constructor(props){
        super(props)
        this.state = {
          p_add_line1: Session.get('p_add_line1')===('null'||null)?'':Session.get('p_add_line1'),
          p_add_line2: Session.get('p_add_line2')===('null'||null)?'':Session.get('p_add_line2'),
          p_city: Session.get('p_city')===('null'||null)?'':Session.get('p_city'),
          p_state: Session.get('p_state')===('null'||null)?'':Session.get('p_state'),
          p_pin: Session.get('p_pin')===('null'||null)?'':Session.get('p_pin'),
          c_add_line1: Session.get('c_add_line1')===('null'||null)?'':Session.get('c_add_line1'),
          c_add_line2: Session.get('c_add_line2')===('null'||null)?'':Session.get('c_add_line2'),
          c_city: Session.get('c_city')===('null'||null)?'':Session.get('c_city'),
          c_state: Session.get('c_state')===('null'||null)?'':Session.get('c_state'),
          c_pin: Session.get('c_pin')===('null'||null)?'': Session.get('c_pin'),
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
                localStorage.setItem('c_city',data.action.payload.data.result.c_city);
                localStorage.setItem('c_state',data.action.payload.data.result.c_state);
                localStorage.setItem('c_pin',data.action.payload.data.result.c_pin);
        
                Session.set('p_add_line1',localStorage.getItem('p_add_line1'))
                Session.set('p_add_line2',localStorage.getItem('p_add_line2'))
                Session.set('p_city',localStorage.getItem('p_city'))
                Session.set('p_state',localStorage.getItem('p_state'))
                Session.set('p_pin',localStorage.getItem('p_pin'))

                Session.set('c_add_line1',localStorage.getItem('c_add_line1'))
                Session.set('c_add_line2',localStorage.getItem('c_add_line2'))
                Session.set('c_city',localStorage.getItem('c_city'))
                Session.set('c_state',localStorage.getItem('c_state'))
                Session.set('c_pin',localStorage.getItem('c_pin'))

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

          var address=[];
          address.push({
              id: Session.get('email'),
              add_type: 'p',
              add_line1: this.state.p_add_line1,
              add_line2: this.state.p_add_line2,
              city: this.state.p_city,
              state: this.state.p_state,
              pin: this.state.p_pin,

          });
          address.push({
            id: Session.get('email'),
            add_type: 'c',
            add_line1: this.state.c_add_line1,
            add_line2: this.state.c_add_line2,
            city: this.state.c_city,
            state: this.state.c_state,
            pin: this.state.c_pin,
          });

          const data={
           address:JSON.stringify(address),
           id: Session.get('email')
          }

          axios({
            method: 'POST',
            url: `${API}/details/address`,
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
        var states=JSON.parse(localStorage.getItem('states'))
        console.log(Session.get('p_add_line1'));
        console.log(localStorage.getItem('p_add_line1'));
        return (
          <React.Fragment>
          {!this.state.isLogged &&
            <Container>
              <br/>
              <Styled >
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>Address</CardText> <br/>
    
                  <CardText className='inputData'>
                  <CardText className='h6'>Permanent Address</CardText> <br/>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Address Line 1<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="p_add_line1" 
                        placeholder="Address Line 1"
                        value={this.state.p_add_line1}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Address Line 2</label>
                      <Input 
                        type="text" 
                        name="p_add_line2" 
                        placeholder="Address Line 2"
                        value={this.state.p_add_line2}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >City<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="p_city" 
                        placeholder="City"
                        value={this.state.p_city}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                      <label className="col-sm-3 col-form-label" >State<span style={{color:'red'}}> *</span></label>
                       <select className="form-control" name="p_state"  onChange={this.handleChange} value={this.state.p_state} required>
                       
                       {states.map(({ id, states }, index) => <option value={states} required>{states}</option>)}
                       </select> 
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >PIN<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="p_pin" 
                        placeholder="PIN"
                        value={this.state.p_pin}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <br/><br/>
                    <CardText className='h6'>Corresponding Address</CardText> <br/>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Address Line 1<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="c_add_line1" 
                        placeholder="Address Line 1"
                        value={this.state.c_add_line1}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Address Line 2</label>
                      <Input 
                        type="text" 
                        name="c_add_line2" 
                        placeholder="Address Line 2"
                        value={this.state.c_add_line2}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >City<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="c_city" 
                        placeholder="City"
                        value={this.state.c_city}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                      <label className="col-sm-3 col-form-label" >State<span style={{color:'red'}}> *</span></label>
                       <select className="form-control" name="c_state"  onChange={this.handleChange} value={this.state.c_state} required>
                       
                       {states.map(({ id, states }, index) => <option value={states} required>{states}</option>)}
                       </select> 
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >PIN<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="c_pin" 
                        placeholder="PIN"
                        value={this.state.c_pin}
                        onChange={this.handleChange}
                        required
                      />
                    </FormGroup>

                    
                    
                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/personal"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   <Link to="/academics"><Button  className="btn btn-primary">Next</Button></Link>
                  
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

export default connect(mapStateProps)(ContentAddress);