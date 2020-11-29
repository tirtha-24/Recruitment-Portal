
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
import {getPublications} from '../../../redux/action/details';

class ContentPublications extends Component {
    constructor(props){
        super(props)
        const prototype=[{
            id:Session.get('email'),
            sn:1,
            pub_details:"",
            indexed_in:"",
            paid_or_not:"",
            auth_type:""
        }]
        this.state = {
          publications: Session.get('publications')===null?prototype:JSON.parse(localStorage.getItem('publications')),
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

      componentDidMount(){
        //this.getData()
      }

      getToken =  () => {
        const resultToken = localStorage.getItem('token')
        return resultToken;
      }

      handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...this.state.publications];
        list[index][name] = value;
        this.setState({publications:list});
      }

      handleAdd = (e) => {
        e.preventDefault();
        this.setState({
            publications:this.state.publications.concat([{
            id:Session.get('email'),
            sn:"",
            pub_details:"",
            indexed_in:"",
            paid_or_not:"",
            auth_type:""
          }])
        })
      }

      handleRemove = (e,index) => {
        e.preventDefault();
        const list = [...this.state.publications];
        list.splice(index, 1);
        this.setState({publications:list});
      }

      handleSubmit = (event) => {
        event.preventDefault();

          var publications=[...this.state.publications];
          for(var i=0;i<publications.length;i++){
            publications[i].sn=i+1;
          }

          const data={
            publications:JSON.stringify(publications),
           id: Session.get('email')
          }

          axios({
            method: 'POST',
            url: `${API}/details/publications`,
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
       
        console.log(Session.get('publications'))
        var publications=[...this.state.publications];
        
        return (
          <React.Fragment>
          {!this.state.isLogged &&
            <Container>
              <br/>
              <Styled >
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>Publications</CardText> <br/>
    
                  <CardText className='inputData'>
                 
                    {publications.map((x,index) => (<div>
                         <br></br>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Publication Details<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="pub_details" 
                            placeholder="Publication Details"
                            value={this.state.publications[index].pub_details}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Indexed_In<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="indexed_in" 
                            placeholder="Indexed_In"
                            value={this.state.publications[index].indexed_in}
                            onChange={e=>this.handleChange(e,index)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Paid or Not<span style={{color:'red'}}> *</span></label>
                        <select className="form-control" name="paid_or_not"  onChange={e=>this.handleChange(e,index)} value={this.state.publications[index].paid_or_not} required>
                        <option>YES</option>
                        <option required>NO</option>
                       </select> 
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Authentication Type</label>
                          <Input 
                            type="text" 
                            name="auth_type" 
                            placeholder="Authentication Type"
                            value={this.state.publications[index].auth_type}
                            onChange={e=>this.handleChange(e,index)}
                          />
                        </FormGroup>
                
                        <div >
                        {publications.length !== 1 && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={(e) => this.handleRemove(e,index)}>-</button>}
                        &nbsp;&nbsp;
                        {publications.length - 1=== index && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={(e)=>this.handleAdd(e)}>+</button>}
                        </div>
    
                        <br/><br/>
                        </div>
                    )
                    )}
                    
                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/professionalbodies"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   <Link to="/patent"><Button  className="btn btn-primary">Next</Button></Link>
                  
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

export default connect(mapStateProps)(ContentPublications);