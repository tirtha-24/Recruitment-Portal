
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
import {getDepartments} from '../../../redux/action/details';

class ContentDepartment extends Component {
    constructor(props){
        super(props)
        this.state = {
          id: Session.get('email'),
          adv_no: localStorage.getItem('applyadv'),
          post_name: localStorage.getItem('applypost'),
          depName: "",
          data: {},
          isLogged: this.props.user.isLogged,
          message: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getToken = this.getToken.bind(this) 
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

          const application={
            id:this.state.id,
            adv_no: this.state.adv_no,
            post_name: this.state.post_name,
            depName: this.state.depName,

          }

          const data={
           application:JSON.stringify(application),
           id: localStorage.getItem('email')
          }

          console.log(data);

          axios({
            method: 'POST',
            url: `${API}/apply`,
            data: qs.stringify(data),
            headers : {
              'content-Type': 'application/x-www-form-urlencoded',
              'x-access-token': this.getToken(),
            }
          })
          .then(res => {
            //console.log(res);
            if(res.data.success === true) {
              this.props.history.push('/')
            } else {
              this.setState({
                message: res.data.message
              })
            }
              
      })
     
    }

      render() {
        var dep=JSON.parse(localStorage.getItem('depts'))
        var depts=[];
        for(var i=0;i<dep.length;i++){
          if(dep[i].type==="academic")
          depts.push(dep[i].name);
         // console.log(dep[i].name);
        }
    
        return (
          <React.Fragment>
          {!this.state.isLogged &&
            <Container>
              <br/>
              <Styled >
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>Select Department</CardText> <br/>
    
                  <CardText className='inputData'>
                  
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                      <label className="col-sm-3 col-form-label" >Department<span style={{color:'red'}}> *</span></label>
                       <select className="form-control" name="depName"  onChange={this.handleChange} value={this.state.depName} required>
                      
                       {depts.map(( dep, index) => <option value={dep} required>{dep}</option>)}
                       </select> 
                    </FormGroup>

                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/upload"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                  
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

export default connect(mapStateProps)(ContentDepartment);