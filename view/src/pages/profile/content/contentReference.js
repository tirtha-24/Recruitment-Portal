
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
import {getReference} from '../../../redux/action/details';

class ContentReference extends Component {
    constructor(props){
        super(props)
        const prototype=[{
            id:Session.get('email'),
            sn:1,
            ref_name:"",
            occuption:"",
            address:"",
            fax:"",
            email:"",
            contact:""
        }]
        this.state = {
          reference: Session.get('reference')===null?prototype:JSON.parse(localStorage.getItem('reference')),
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

      componentDidMount(){
        //this.getData()
      }

      getToken =  () => {
        const resultToken = localStorage.getItem('token')
        return resultToken;
      }

      handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...this.state.reference];
        list[index][name] = value;
        this.setState({reference:list});
      }

      handleAdd = (e) => {
        e.preventDefault();
        this.setState({
            reference:this.state.reference.concat([{
            id:Session.get('email'),
            sn:"",
            ref_name:"",
            occuption:"",
            address:"",
            fax:"",
            email:"",
            contact:""
          }])
        })
      }

      handleRemove = (e,index) => {
        e.preventDefault();
        const list = [...this.state.reference];
        list.splice(index, 1);
        this.setState({reference:list});
      }

      handleSubmit = (event) => {
        event.preventDefault();

          var reference=[...this.state.reference];
          for(var i=0;i<reference.length;i++){
            reference[i].sn=i+1;
          }

          const data={
            reference:JSON.stringify(reference),
            id: Session.get('email')
          }

          axios({
            method: 'POST',
            url: `${API}/details/reference`,
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
       
        console.log(Session.get('reference'))
        var reference=[...this.state.reference];
        
        return (
          <React.Fragment>
          {!this.state.isLogged &&
            <Container>
              <br/>
              <Styled >
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>Reference</CardText> <br/>
    
                  <CardText className='inputData'>
                 
                    {reference.map((x,index) => (<div>
                         <br></br>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Reference Name<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="ref_name" 
                            placeholder="Reference Name"
                            value={this.state.reference[index].ref_name}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Occupation<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="occuption" 
                            placeholder="Occupation"
                            value={this.state.reference[index].occuption}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Address<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="address" 
                            placeholder="Address"
                            value={this.state.reference[index].address}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Email<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.reference[index].email}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Contact<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="contact" 
                            placeholder="Contact"
                            value={this.state.reference[index].contact}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                
                        <div >
                        {reference.length !== 1 && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={(e) => this.handleRemove(e,index)}>-</button>}
                        &nbsp;&nbsp;
                        {reference.length - 1=== index && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={(e)=>this.handleAdd(e)}>+</button>}
                        </div>
    
                        <br/><br/>
                        </div>
                    )
                    )}
                    
                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/patent"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   <Link to="/specialawards"><Button  className="btn btn-primary">Next</Button></Link>
                  
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

export default connect(mapStateProps)(ContentReference);