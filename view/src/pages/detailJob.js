import React, { Component } from 'react'

import Navigation from './Nav';
import Footer from './Footer';

import {
  Row, Col, Container, Card, Spinner,
} from 'reactstrap'

import { API } from '../config';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {connect} from 'react-redux';
import {getOneJob} from '../redux/action/job';

class DetailJob extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.match.params.id_job,
      data: {}
    }
  }
  
  componentDidMount(){
    this.getOneData(this.state.id);
    localStorage.setItem('apply',"no");
  }

  getOneData = async(id)=>{
    console.log(this.state.id)
    await this.props.dispatch(getOneJob(id)).then(res=>{
      console.log(res.action.payload.data.result[0])
      this.setState({
        data:res.action.payload.data.result[0],
      })
    })
  }

  getValue=async(adv,post)=>{
    localStorage.setItem('applyadv',adv);
    localStorage.setItem('applypost',post);
    localStorage.setItem('apply',"yes");
  }


  render() {
    console.log(this.state.data)
    return (
      <React.Fragment>
      <Navigation isLogged={this.props.isLogged}/>
      <Styled> 
        <Container><br/><br/>
        {!this.state.data.id&&(
          <React.Fragment>
            <Spinner style={{ width: '3rem', height: '3rem'}} />
          </React.Fragment>
          
        )}<br/>
        {this.state.data.id&&(
          <React.Fragment>
            <Card className='cardDetail'>
            <Row>
              <Col sm='3' className='contLogo'>
                <img src={this.state.data.logo} className='logoComp' alt='Company Logo'/>
              </Col>
              <Col sm='6'>
                <h1>{this.state.data.post_name}</h1>
                <p><strong>Post Type : </strong> {this.state.data.name_category}</p>
                <p><strong>Advertisement Number : </strong> {this.state.data.adv_no}</p>
                <p><strong>Institute : </strong> {this.state.data.name_company}</p>
                <p><strong>Opening date: </strong> {this.state.data.open_date.toLocaleString().replace(/T/, ' ').replace(/\..+/, '')}</p>
                <p><strong>Closing date: </strong> {this.state.data.close_date.toLocaleString().replace(/T/, ' ').replace(/\..+/, '')}</p>
              </Col>
              <Col sm='3' className='stickyItem'>
                <Link to='/personal'onClick={()=>this.getValue(this.state.data.adv_no,this.state.data.post_name)} className='btn btn-primary btnApply'>Apply Now</Link>
              </Col>
            </Row>
            <hr/>
            <Row>
              <p className='descJob'><strong>DESCRIPTION</strong> <br/>{this.state.data.description_company}
              <br/>
              <br/>
              <b>Know before apply</b>
              <br/>
              <a href={`${API}/public/`+this.state.data.details_path} download>Click here</a>
              </p>
            </Row>
            </Card>
          </React.Fragment>
        )

        }<br/><br/>
        </Container>
        <Footer />
      </Styled>
      </React.Fragment>
    )
  }
}

const Styled = styled.div`
.descJob {
  text-align: justify
}
.contLogo {
  align-self: center
}
.logoComp {
  width: 200px;
}
.cardDetail {
  padding : 50px;
}
.btnApply {
  align-items: center;
  font-size: 18px;
  border-radius: 20px;
  padding: 0 20px;
  position: sticky;
  padding: 9px 50px;
}
.stickyItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
}
`;

const mapStateProps = state => ({
  job: state.job
})

export default connect(mapStateProps)(DetailJob);