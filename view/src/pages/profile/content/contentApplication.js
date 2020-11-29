/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../../../config';

import {
  Row, Col, Container, Button, UncontrolledCollapse,Alert,
  Card, CardTitle, CardText, Form, FormGroup, Spinner , Input,
} from 'reactstrap'


import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Session from 'react-session-api'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faKey, faEnvelope, faSignInAlt, faUser, faPhone, faGenderless, faTransgender, faMale, faFemale, faUserTag, faSave } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import {getApplication} from '../../../redux/action/details';

class ContentApplication extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: {},
      info: {},
      prev: '',
      next: '',
    //   searchNameJob: '%%',
    //   searchNameCategory: '%%',
      isLoading: true,
      message: '',
     
    }
  }
  
  componentDidMount(){
    this.getData()

  }

  getData = async()=>{
    //const query = this.state.sortBy+'=DESC&&searchNameJob='+ this.state.searchNameJob+'&&searchNameCategory='+this.state.searchNameCategory;
    console.log(1);
    this.props.dispatch(getApplication(localStorage.getItem('email'))).then(res => {
      console.log(res.action.payload.data);
      this.setState({
        data: res.action.payload.data.result,
        info: res.action.payload.data.info,
        prev: res.action.payload.data.info?res.action.payload.data.info.prev:'',
        next: res.action.payload.data.info?res.action.payload.data.info.next:'',
        isLoading: false,
      })
    })
  }


  buttonPress = async(page)=>{
    this.setState({isLoading:true})
    this.getDataExample(page).then(data=>{
      this.setState({
        data: data.result,
        next: data.info.next,
        prev: data.info.prev,
        isLoading: false
      })
    })
  }
  
  
  render() {
    console.log(5);
    return (  
      <Styled>
    
        <Container><br/><br/>
          <Row className='justify-content-md-center rowBody'>
            {this.state.isLoading&&(
              <Spinner style={{ width: '3rem', height: '3rem' }} />
            )}
          </Row>
          {!this.state.isLoading&&
            <React.Fragment>

              <Row className='rowBody'>
                <ul className='getCount'>
                  <li className='lblSort'>Get {this.state.info?this.state.info.totalData:0} results</li>
                </ul>                
              </Row>

              {this.state.data==null?<></>:this.state.data.map((v,i)=>(
                
                <Row sm={{size:'auto'}} key={i.toString()} className='shadow p-3 mb-5 bg-white rounded rowBody'>
                  <Card body id={'toggler' + v.adv_no.toString()} className='myCard'>
                    <CardTitle className='cardBody'>
                      <Row>
                        <Col md='2'>
                          <p className='descCard'>Application No.</p>
                          <p className='catJob'>{v.app_no}</p>
                        </Col>
                        <Col md='2'>
                          <p className='descCard'>Advertisement No.</p>
                          <p className='catJob'>{v.adv_no}</p>
                        </Col>
                        <Col md='2'>
                          <p className='descCard'>Post</p>
                          <p className='catJob'>{v.post_name}</p>
                        </Col>
                        <Col md='2'>
                          <p className='descCard'>Department Name</p>
                          <p className='catJob'>{v.depName}</p>
                        </Col>
                        <Col md='2'>
                          <p className='descCard'>Submission Date</p>
                          <p className='catJob'>{v.app_date.toLocaleString().replace(/T/, ' ').replace(/\..+/, '')}</p>
                        </Col>
                        <Col md='2'>
                          <p className='descCard'>Application Status</p>
                          <p className='catJob'>{v.status}</p>
                        </Col>
                        
                      </Row>
                    </CardTitle>
               
                  </Card>
                </Row>
              ))}
            </React.Fragment>
          }
          <Row className='nextPrev'>
            {
              this.state.prev === '' ? null : <Button color='secondary' outline onClick={()=>this.buttonPress(this.state.prev)}>Prev</Button>
            }
            <span>&nbsp;</span>
            {
              this.state.next === '' ? null : <Button color='secondary' outline onClick={()=>this.buttonPress(this.state.next)}>Next</Button>
            }
            
          </Row>
          <br/>
        </Container>
           
      </Styled>
    )
  }
}

const Styled = styled.div`
  .myCard {
    margin-bottom: 0;
  }
  .rowBody {
    margin:0;
  }
  .lblSort {
    align-self:center;
  }
  .getSort {
    padding: 0;
    justify-content: flex-end;
    list-style-type: none;
    float: right;
    width:25%;
    display: inline-flex;
  }
  .getCount {
    padding: 0px;
    list-style-type: none;
    float: left;
    width:75%;
    align-self: center;
  }
  .sortBy{
    background-color:#F1F1F1;
    border: none;
  }
  .nextPrev{
    justify-content: center;
  }
  .btnSearch {
    height: calc(1.5em + .75rem + 10px);
    border-radius: 5rem;
    font-size: 18px;
    padding: 0 40px;
    float:right;
  }
  .searchBar {
    border-radius: 5rem;
    height: calc(1.5em + .75rem + 10px);
  }
  .card-body:hover{
    background-color: #EFF0F1;
  }
  .mb-5, .my-5 {
    margin-bottom: 1rem!important;
  }
  .cardBody {
    margin-bottom: 0px;
    border-style:none;
  }
  .card-body {
    border-style:none;
  }
  .buttonApply {
    align-self: center;
  }
  .btnApply {
    font-size: 15px;
    border-radius: 50px;
    padding: 5px 10px;
  }
  .titleJob {
    color: #2387aa;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
  }
  .descCard {
    font-size: 15px;
    color: #888;
  }
  .catJob{
    font-size: 17px;
    color: black;
  }
  .readMore {
    font-weight: 600
    color: #2387aa
  }
  .logoComp {
    heigth: 100px;
  }
`;

const mapStateProps = state => ({
    user: state.user,
    details: state.details
})

export default connect(mapStateProps)(ContentApplication);
