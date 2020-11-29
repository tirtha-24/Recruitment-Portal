
import React, { Component, useState } from 'react'
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
import {getConsultancyprojects} from '../../../redux/action/details';

class ContentConsultancyprojects extends Component {
    constructor(props){
        super(props)
        const prototype=[{
            id:Session.get('email'),
            sn:1,
            project_title:"",
            amount:"",
            f_agency:"",
            role:"PI",
            no_co_pi:"",
            duration:"",
            status:"ONGOING"
        }]
        this.state = {
          consultancyprojects: (Session.get('consultancyprojects')===(null))?prototype:(JSON.parse(localStorage.getItem('consultancyprojects'))),
          data: {},
          isLogged: this.props.user.isLogged,
          message: '',
        }
        console.log(Session.get('consultancyprojects')===null)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getToken = this.getToken.bind(this) 
        this.getData = this.getData.bind(this) 
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

      }

      getData = async(id)=>{
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

      componentDidMount(){
        //this.getData()
      }

      getToken =  () => {
        const resultToken = localStorage.getItem('token')
        return resultToken;
      }

      handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...this.state.consultancyprojects];
        list[index][name] = value;
        this.setState({consultancyprojects:list});
      }

      handleAdd = (e) => {
        e.preventDefault();
        this.setState({
            consultancyprojects:this.state.consultancyprojects.concat([{
            id:Session.get('email'),
            sn:"",
            project_title:"",
            amount:"",
            f_agency:"",
            role:"PI",
            no_co_pi:"",
            duration:"",
            status:"ONGOING"
          }])
        })
      }

      handleRemove = (e,index) => {
        e.preventDefault();
        const list = [...this.state.consultancyprojects];
        list.splice(index, 1);
        this.setState({consultancyprojects:list});
      }

      handleSubmit = (event) => {
        event.preventDefault();

          var consultancyprojects=[...this.state.consultancyprojects];
          for(var i=0;i<consultancyprojects.length;i++){
            consultancyprojects[i].sn=i+1;
          }

          const data={
            consultancyprojects:JSON.stringify(consultancyprojects),
           id: Session.get('email')
          }

          axios({
            method: 'POST',
            url: `${API}/details/consultancyprojects`,
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
        //console.log(Session.get('academics'));
        console.log(localStorage.getItem('consultancyprojects'));
        console.log(this.state.consultancyprojects);
        console.log(Session.get('consultancyprojects'))
        var consultancyprojects=[...this.state.consultancyprojects];
        
        return (
          <React.Fragment>
          {!this.state.isLogged &&
            <Container>
              <br/>
              <Styled >
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>Consultancy Projects</CardText> <br/>
    
                  <CardText className='inputData'>
                 
                    {consultancyprojects.map((x,index) => (<div>
                         <br></br>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Project Title<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="project_title" 
                            placeholder="Project Title"
                            value={this.state.consultancyprojects[index].project_title}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Amount Paid<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="number" 
                            name="amount" 
                            placeholder="Amount Paid"
                            value={this.state.consultancyprojects[index].amount}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Funding Agency<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="f_agency" 
                            placeholder="Funding Agency"
                            value={this.state.consultancyprojects[index].f_agency}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Role<span style={{color:'red'}}> *</span></label>
                       <select className="form-control" name="role"  onChange={e=>this.handleChange(e,index)} value={this.state.consultancyprojects[index].role} required>
                        <option>PI</option>
                        <option required>CO-PI</option>
                       </select> 
                       </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Number of CO-PIs<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="number" 
                            name="no_co_pi" 
                            placeholder="Number of CO-PIs"
                            value={this.state.consultancyprojects[index].no_co_pi}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Duration<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="duration" 
                            placeholder="Duration"
                            value={this.state.consultancyprojects[index].duration}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Status<span style={{color:'red'}}> *</span></label>
                        <select className="form-control" name="status"  onChange={e=>this.handleChange(e,index)} value={this.state.consultancyprojects[index].status} required>
                        <option>ONGOING</option>
                        <option required>COMPLETED</option>
                       </select> 
                       </FormGroup>
                        <div >
                        {consultancyprojects.length !== 1 && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={(e) => this.handleRemove(e,index)}>-</button>}
                        &nbsp;&nbsp;
                        {consultancyprojects.length - 1=== index && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={(e)=>this.handleAdd(e)}>+</button>}
                        </div>
    
                        <br/><br/>
                        </div>
                    )
                    )}
                    
                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/adminexperience"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   <Link to="/outreachyprojects"><Button  className="btn btn-primary">Next</Button></Link>
                  
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

export default connect(mapStateProps)(ContentConsultancyprojects);