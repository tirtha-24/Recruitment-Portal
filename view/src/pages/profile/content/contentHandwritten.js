
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
import {getHandwritten} from '../../../redux/action/details';

class ContentHandwritten extends Component {
    constructor(props){
        super(props)
        this.state = {
          handwritten:"",
          path:Session.get('handwritten')===('null'||null)?'':`${API}/`+Session.get('handwritten'),
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
        await this.props.dispatch(getHandwritten(id)).
        then(data=>{
            console.log(1);
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

      componentWillMount(){
        //this.getData()
        this.getData(localStorage.getItem('email'));
      }

      getToken =  () => {
        const resultToken = localStorage.getItem('token')
        return resultToken;
      }

      handleChange = (event) => {
        var file = document.getElementById(event.target.name);
        file.href =  URL.createObjectURL(event.target.files[0]);
        file.innerHTML=event.target.files[0].name;
        // file.src =  URL.createObjectURL(event.target.files[0]);
        var path=file.href;
        console.log('Handle change ', file)
        this.setState({
          [event.target.name]: event.target.files[0],
          path,
        })
      }

      handleSubmit = (event) => {
        event.preventDefault();

          var upload={
            id: Session.get('email'),
            d_path: this.state.path,
        };

          const formData= new FormData();
          formData.append('id',Session.get('email'));
          formData.append('upload',JSON.stringify(upload));
          formData.append('file',this.state.handwritten);

          axios.post(`${API}/handwritten`, formData, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res)
      })
     
       this.getData(localStorage.getItem('email'));
          
    }

      render() {
        // var states=JSON.parse(localStorage.getItem('states'))
        // console.log(Session.get('p_add_line1'));
        console.log(this.state.path);

        return (
          <React.Fragment>
          {!this.state.isLogged &&
            <Container>
              <br/>
              <Styled >
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>Handwritten Document</CardText> <br/>
    
                  <CardText className='inputData'>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Upload<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="file" 
                        name="handwritten" 
                        onChange={this.handleChange}
                        required
                      />
                      {/* <img id="handwitten" src={this.state.path}/> */}
                      <a id="handwritten" href={this.state.path} download>handwritten</a>
                    </FormGroup>
                    
                    <br/><br/>
                    
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/specialawards"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   <Link to="/otherinfo"><Button  className="btn btn-primary">Next</Button></Link>&nbsp;&nbsp;
                  
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

export default connect(mapStateProps)(ContentHandwritten);