
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
import {getAcademics,getDocuments} from '../../../redux/action/details';

class ContentAcademics extends Component {
    constructor(props){
        super(props)
        const prototype=[{
            id:Session.get('email'),
            sn:1,
            exam_name:"10TH",
            branch:"",
            institute:"",
            p_year:"",
            percent:"",
            class_div:""
        },{
            id:Session.get('email'),
            sn:2,
            exam_name:"12TH",
            branch:"",
            institute:"",
            p_year:"",
            percent:"",
            class_div:""
        },
        {
            id:Session.get('email'),
            sn:3,
            exam_name:"",
            branch:"",
            institute:"",
            p_year:"",
            percent:"",
            class_div:""
        }
      ]


        const pathprototype=[{
          id:Session.get('email'),
          sn:"",
          d_type:"academics",
          d_name:"10TH",
          d_path:"",
      },{
          id:Session.get('email'),
          sn:"",
          d_type:"academics",
          d_name:"12TH",
          d_path:"",
      },
      {
          id:Session.get('email'),
          sn:"",
          d_type:"academics",
          d_name:"",
          d_path:"",
      },
      {},
      {}
    ]
      this.state = {
        academics: Session.get('academics')===null?prototype:JSON.parse(localStorage.getItem('academics')),
        files:new Array(3),
        paths:pathprototype,
        data: {},
        isLogged: this.props.user.isLogged,
        message: '',
      }


        //console.log(this.state.paths);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getToken = this.getToken.bind(this) 
        this.getData = this.getData.bind(this) 
        this.getDocuments = this.getDocuments.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

       // this.getDocuments(localStorage.getItem('email'))
      }

      getDocuments = async(id)=>{
        console.log(id);
        await this.props.dispatch(getDocuments(id)).
        then(data=>{
            //console.log(id);
            console.log(data.action.payload.data.result); 
            if(data.action.payload.data.status===true){
                localStorage.setItem('documents',JSON.stringify(data.action.payload.data.result));
                Session.set('documents',localStorage.getItem('documents'))

                var documents=JSON.parse(localStorage.getItem('documents'));
                var academics=[];
                for(var i=0;i<documents.length;i++){
                  if(documents[i].d_type==="academics"){
                    academics.push(documents[i]);
                  }
                }
                for(var i=0;i<academics.length;i++){
                  academics[i].d_path=`${API}/`+academics[i].d_path
                }

                console.log(academics)
                if(academics.length>=3)
                {
                var paths=[...academics];
                console.log(paths);
                this.setState({paths:paths
                 });
                 console.log(this.state.paths);
                }
               
                localStorage.setItem('academicdocuments',JSON.stringify(data.action.payload.data.result));
                Session.set('academicdocuments',localStorage.getItem('academicdocuments'))

                }
        })
        .catch(err => {
            console.log(err)
            //localStorage.setItem('personal',"err")
          })
      }

      getData = async(id)=>{
        await this.props.dispatch(getAcademics(id)).
        then(data=>{
            //console.log(data);
            console.log(data.action.payload.data.result); 
            if(data.action.payload.data.status===true){
                localStorage.setItem('academics',JSON.stringify(data.action.payload.data.result));
            
                Session.set('academics',localStorage.getItem('academics'))

                }
        })
        .catch(err => {
            console.log(err)
            //localStorage.setItem('personal',"err")
          })
      }

      componentWillMount(){
        //this.getData()
        //getDocuments("tirtha99iit@gmail.com");
        console.log(localStorage.getItem('email'));
        console.log(this.state.paths);
        this.getDocuments(localStorage.getItem('email'))
      }

      getToken =  () => {
        const resultToken = localStorage.getItem('token')
        return resultToken;
      }

      handleChange = (e, index) => {
        if(e.target.name==='file'){
          const list=[...this.state.paths];
          var file = document.getElementsByClassName(e.target.name)[index];
          file.href =  URL.createObjectURL(e.target.files[0]);
          file.innerHTML=e.target.files[0].name;
          list[index].d_path=file.href
          list[index].d_name=this.state.academics[index].exam_name
          list[index].d_type="academics";
          const files =[...this.state.files];
          files[index]=e.target.files[0];
          this.setState({files:files,paths:list});
        }
        else{
        const { name, value } = e.target;
        const list = [...this.state.academics];
        list[index][name] = value;

        const pathlist=[...this.state.paths]
        pathlist[index].d_name=list[index].exam_name
        
        this.setState({academics:list,
        paths:pathlist});

        }
      }

      handleAdd = () => {
        this.setState({
            academics:this.state.academics.concat([{
            id:localStorage.getItem('email'),
            sn:"",
            exam_name:"",
            branch:"",
            institute:"",
            p_year:"",
            percent:"",
            class_div:""
          }]),
            paths:this.state.paths.concat([{
              id:localStorage.getItem('email'),
              sn:"",
              d_type:"academics",
              d_name:"",
              d_path:"",
            }]),
            files:this.state.files.concat([
              ""]),
        })
      }

      handleRemove = (e,index) => {
        e.preventDefault();
        const list = [...this.state.academics];
        const pathlist=[...this.state.paths];
        const files=[...this.state.files];
        list.splice(index, 1);
        pathlist.splice(index, 1);
        this.setState({academics:list});
        this.setState({paths:pathlist});
        this.setState({files:files});
      }

      handleSubmit = (event) => {
        event.preventDefault();

          var academics=[...this.state.academics];
          for(var i=0;i<academics.length;i++){
              academics[i].sn=i+1;
          }

          var doc=[...this.state.paths];

          console.log(doc.length);
          
          const formData= new FormData();
          formData.append('id',localStorage.getItem('email'));
          formData.append('upload',JSON.stringify(doc));
          
          for(var i=0;i<this.state.files.length;i++)
          formData.append('file',this.state.files[i]);

          const data={
           academics:JSON.stringify(academics),
           id: Session.get('email')
          }

          axios({
            method: 'POST',
            url: `${API}/details/academics`,
            data: qs.stringify(data),
            headers : {
              'content-Type': 'application/x-www-form-urlencoded',
              'x-access-token': this.getToken(),
            }
          })
          .then(res => {
              const id= localStorage.getItem('email')
              this.getData(id);
      }
      )

      axios.post(`${API}/documents`, formData, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res)
        this.getDocuments(localStorage.getItem('email'));
      })
     
    }

      render() {
        //console.log(Session.get('academics'));
        console.log(this.state.paths);
        //console.log(localStorage.getItem('states'));
        var academics=[];
        var paths=[];

        for(var i=2;i<this.state.paths.length;i++){
          paths.push(this.state.paths[i]);
      }

        for(var i=2;i<this.state.academics.length;i++){
            academics.push(this.state.academics[i]);
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
                  <CardText className='h3'>Academics</CardText> <br/>
    
                  <CardText className='inputData'>
                  <CardText className='h6'>Secondary Examination</CardText> <br/>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Exam Name</label>
                      <Input 
                        type="text" 
                        name="exam_name" 
                        value={this.state.academics[0].exam_name}
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Institute<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="institute" 
                        placeholder="Institute"
                        value={this.state.academics[0].institute}
                        onChange={e=>this.handleChange(e,0)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Passing Year<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="number" 
                        name="p_year" 
                        placeholder="Passing Year"
                        value={this.state.academics[0].p_year}
                        onChange={e=>this.handleChange(e,0)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Percentage<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="percent" 
                        placeholder="Percentage"
                        value={this.state.academics[0].percent}
                        onChange={e=>this.handleChange(e,0)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Class Division<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="class_div" 
                        placeholder="Class Division"
                        value={this.state.academics[0].class_div}
                        onChange={e=>this.handleChange(e,0)}
                        required
                      />
                    </FormGroup>


                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Document<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="file" 
                        name="file" 
                        onChange={e=>this.handleChange(e,0)}
                        required
                      />
                      <a class="file" href={this.state.paths[0].d_path} download>document</a>
                    </FormGroup>
                   <br/><br/>

                   <CardText className='h6'>Higher Secondary Examination</CardText> <br/>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Exam Name</label>
                      <Input 
                        type="text" 
                        name="exam_name" 
                        value={this.state.academics[1].exam_name}
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Institute<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="institute" 
                        placeholder="Institute"
                        value={this.state.academics[1].institute}
                        onChange={e=>this.handleChange(e,1)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Passing Year<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="number" 
                        name="p_year" 
                        placeholder="Passing Year"
                        value={this.state.academics[1].p_year}
                        onChange={e=>this.handleChange(e,1)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Percentage<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="percent" 
                        placeholder="Percentage"
                        value={this.state.academics[1].percent}
                        onChange={e=>this.handleChange(e,1)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Class Division<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="text" 
                        name="class_div" 
                        placeholder="Class Division"
                        value={this.state.academics[1].class_div}
                        onChange={e=>this.handleChange(e,1)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mb-sm-0 inputForm" >
                    <label className="col-sm-3 col-form-label" >Document<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="file" 
                        name="file" 
                        onChange={e=>this.handleChange(e,1)}
                        required
                      />
                      <a class="file" href={this.state.paths[1].d_path} download>document</a>
                    </FormGroup>

                    <br/><br/>
                    <CardText className='h5'>Graduation Onwards</CardText>
                    {academics.map((x,index) => (<div>
                        
                         <br></br>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Exam Name<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="exam_name" 
                            placeholder="Exam Name"
                            value={this.state.academics[index+2].exam_name}
                            onChange={e=>this.handleChange(e,index+2)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Institute<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="institute" 
                            placeholder="Institute"
                            value={this.state.academics[index+2].institute}
                            onChange={e=>this.handleChange(e,index+2)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Passing Year<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="number" 
                            name="p_year" 
                            placeholder="Passing Year"
                            value={this.state.academics[index+2].p_year}
                            onChange={e=>this.handleChange(e,index+2)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Percentage<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="percent" 
                            placeholder="Percentage"
                            value={this.state.academics[index+2].percent}
                            onChange={e=>this.handleChange(e,index+2)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Class Division<span style={{color:'red'}}> *</span></label>
                          <Input 
                            type="text" 
                            name="class_div" 
                            placeholder="Class Division"
                            value={this.state.academics[index+2].class_div}
                            onChange={e=>this.handleChange(e,index+2)}
                            required
                          />
                        </FormGroup>
                        <FormGroup className="mb-2 mb-sm-0 inputForm" >
                        <label className="col-sm-3 col-form-label" >Document<span style={{color:'red'}}> *</span></label>
                      <Input 
                        type="file" 
                        name="file"
                        onChange={e=>this.handleChange(e,index+2)}
                        required
                       />
                      <a class="file"  href={this.state.paths[index+2].d_path} download>document</a>
                    </FormGroup>

                        <div >
                        {academics.length !== 1 && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={(e) => this.handleRemove(e,index+2)}>-</button>}
                        &nbsp;&nbsp;
                        {academics.length - 1=== index && <button className="btn btn-primary" style={{ width: '3rem' }} onClick={this.handleAdd}>+</button>}
                        </div>
    
                        <br/><br/>
                        </div>
                    )
                    )}
                    
                    <br/>
                    <Button className="btn btn-primary" style={{ width: '5rem' }} type='submit'><span><FontAwesomeIcon icon={faSave}/>&nbsp;Save</span></Button><br/> 
                   {/* <CardText className='messageReg'>{this.state.message}</CardText>      */}
                   <br/>
                   <Link to="/address"><Button  className="btn btn-primary">Prev</Button></Link>&nbsp;&nbsp;
                   <Link to="/phd"><Button  className="btn btn-primary">Next</Button></Link>
                  
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

export default connect(mapStateProps)(ContentAcademics);