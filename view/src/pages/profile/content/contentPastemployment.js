
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
import {getPastemployment} from '../../../redux/action/details';

class ContentPastemployment extends Component {
    constructor(props){
        super(props)
        const prototype=[{
            id:Session.get('email'),
            sn:1,
            employer:"",
            pos:"",
            doj:"",
            dol:"",
            pay_scale:"",
            b_pay:"",
            total_pay:""
        }]
        this.state = {
          pastemployment: Session.get('pastemployment')===null?prototype:JSON.parse(localStorage.getItem('pastemployment')),
          data: {},
          isLogged: this.props.user.isLogged,
          message: '',
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getToken = this.getToken.bind(this) 
        this.getData = this.getData.bind(this) 
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

      }

      getData = async(id)=>{
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

      componentDidMount(){
        //this.getData()
      }

      getToken =  () => {
        const resultToken = localStorage.getItem('token')
        return resultToken;
      }

      handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...this.state.pastemployment];
        list[index][name] = value;
        this.setState({pastemployment:list});
      }

      handleAdd = (e) => {
        e.preventDefault();
        this.setState({
            pastemployment:this.state.pastemployment.concat([{
            id:Session.get('email'),
            sn:"",
            employer:"",
            pos:"",
            doj:"",
            dol:"",
            pay_scale:"",
            b_pay:"",
            total_pay:""
          }])
        })
      }

      handleRemove = (e,index) => {
        e.preventDefault();
        const list = [...this.state.pastemployment];
        list.splice(index, 1);
        this.setState({pastemployment:list});
      }

      handleSubmit = (event) => {
        event.preventDefault();

          var pastemployment=[...this.state.pastemployment];
          for(var i=0;i<pastemployment.length;i++){
            pastemployment[i].sn=i+1;
          }

          const data={
           pastemployment:JSON.stringify(pastemployment),
           id: Session.get('email')
          }

          axios({
            method: 'POST',
            url: `${API}/details/pastemployment`,
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
        console.log(localStorage.getItem('pastemployment'));
        //console.log(localStorage.getItem('states'));
        var pastemployment=[...this.state.pastemployment];
        
        return (
          <React.Fragment>
          {!this.state.isLogged &&
            <Container>
              <br/>
              <Styled >
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>Past Employments</CardText> <br/>
    
                  <CardText className='inputData'>
                 
                    {pastemployment.map((x,index) => (<div>
                         <br></br>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Employer<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="employer" 
                            placeholder="Employer"
                            value={this.state.pastemployment[index].employer}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Position<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="pos" 
                            placeholder="Position"
                            value={this.state.pastemployment[index].pos}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Date of Joining<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="date" 
                            name="doj" 
                            placeholder="Date of Joining"
                            value={this.state.pastemployment[index].doj}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Date of Leaving<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="date" 
                            name="dol" 
                            placeholder="Date of Leaving"
                            value={this.state.pastemployment[index].dol}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Pay Scale<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="pay_scale" 
                            placeholder="Pay Scale"
                            value={this.state.pastemployment[index].pay_scale}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Base Pay<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="number" 
                            name="b_pay" 
                            placeholder="Base Pay"
                            value={this.state.pastemployment[index].b_pay}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Total Pay<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="number" 
                            name="total_pay" 
                            placeholder="Total Pay"
                            value={this.state.pastemployment[index].total_pay}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <div >
                        {pastemployment.length !== 1 && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={(e) => this.handleRemove(e,index)}>-</button>}
                        &nbsp;&nbsp;
                        {pastemployment.length - 1=== index && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={(e)=>this.handleAdd(e)}>+</button>}
                        </div>
    
                        <br/><br/>
                        </div>
                    )
                    )}
                    
                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/phd"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   <Link to="/preemployment"><Button  className="btn btn-primary">Next</Button></Link>
                  
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

export default connect(mapStateProps)(ContentPastemployment);