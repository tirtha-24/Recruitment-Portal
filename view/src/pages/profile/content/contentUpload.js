
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
import {getUpload} from '../../../redux/action/details';

class ContentUpload extends Component {
    constructor(props){
        super(props)
        this.state = {
          sign:"",
          photo:"",
          signpath:Session.get('sign')===('null'||null)?'':`${API}/`+localStorage.getItem('sign'),
          photopath:Session.get('photo')===('null'||null)?'':`${API}/`+localStorage.getItem('photo'),
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
        await this.props.dispatch(getUpload(id)).
        then(data=>{
            //console.log(data);
            console.log(data.action.payload.data.result); 
            if(data.action.payload.data.status===true){
                console.log(data.action.payload.data.result[0].d_path);
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
        // file.href =  URL.createObjectURL(event.target.files[0]);
        // file.innerHTML=event.target.files[0].name;
        file.src =  URL.createObjectURL(event.target.files[0]);
        var signpath=this.state.signpath;
        var photopath=this.state.photopath;
        // event.target.files[0].name=localStorage.getItem('email')+'/'+event.target.files[0].name;
        if(event.target.name==="photo")
        photopath=file.src;
        else
        signpath=file.src;
        console.log('Handle change ', file)
        this.setState({
          [event.target.name]: event.target.files[0],
          signpath,
          photopath
        })
      }

      handleSubmit = (event) => {
        event.preventDefault();

          var upload=[];
          upload.push({
              id: Session.get('email'),
              sn: 1,
              d_name: "photo",
              d_path: this.state.photo,
          });
          upload.push({
            id: Session.get('email'),
            sn: 2,
            d_name: "sign",
            d_path: this.state.sign,
        });

          const formData= new FormData();
          formData.append('id',localStorage.getItem('email'));
          formData.append('upload',JSON.stringify(upload));
          formData.append('file',this.state.photo);
          formData.append('file',this.state.sign);
       

          axios.post(`${API}/upload`, formData, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res)
        
      })

      this.getData(localStorage.getItem('email'));
     
     
          
    }

      render() {
        // var states=JSON.parse(localStorage.getItem('states'))
        // console.log(Session.get('p_add_line1'));
        console.log(this.state.photopath);
        console.log(localStorage.getItem('email'))

        return (
          <React.Fragment>
          {!this.state.isLogged &&
            <Container>
              <br/>
              <Styled >
              <Card className="logForm" style={{ width: '60rem' }}>
                <Form className='allCard' onSubmit={this.handleSubmit}><br/>
                  <CardText className='messageReg'>{this.state.message}</CardText>  
                  <CardText className='h3'>Upload</CardText> <br/>
    
                  <CardText className='inputData'>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Photo<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="file" 
                        name="photo" 
                        onChange={this.handleChange}
                        accept="image/*"
                        required
                      />
                      <img id="photo" src={this.state.photopath}/>
                      {/* <a id="photo" download></a> */}
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Signature<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="file" 
                        name="sign" 
                        onChange={this.handleChange}
                        accept="image/*"
                        required
                      />
                    <img id="sign" src={this.state.signpath}/>
                    {/* <a id="sign" download/> */}
                    </FormGroup>
                    <br/><br/>
                    
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/otherinfo"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   {(localStorage.getItem('apply')==="yes")&&(
                       <>
                       <Link to="/departments"><Button  className="btn btn-primary">Next</Button></Link>&nbsp;&nbsp;
                       </>
                   )}
                  
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

export default connect(mapStateProps)(ContentUpload);