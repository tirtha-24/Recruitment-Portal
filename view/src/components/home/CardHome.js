import React from 'react';
import {
  Card, CardImg, CardText,
  CardTitle, Container, Row, 
  Col,
} from 'reactstrap';

import styled from 'styled-components'

const Styles = styled.div`
.MyCard {
  text-align: center;
}
.titleCard {
  color: #1f1f1e;
  font-size: 1.25rem;
}
.myImg {
  height: 318px;
}`;

const CardHome = () => {
  return (
    <div>
      <Container>
        <Styles>
          <Row className="MyCard">
            <Col sm="4">
              <Card body className='shadow p-3 mb-5 bg-white rounded'>
                <CardTitle className='titleCard'><strong>Professional Identity</strong></CardTitle>
                <CardImg src={require('../../assets/card1.jpg')}  className= "myImg" top width="100%" alt="Card image cap" />
                <CardText>Build your professional identity online and stay connected with opportunities.</CardText>
              </Card>
            </Col>
            <Col sm="4">
              <Card body className='shadow p-3 mb-5 bg-white rounded'>
                <CardTitle className='titleCard'><strong>Your Personal Page</strong></CardTitle>
                <CardImg className= "myImg" top width="100%" src={require('../../assets/card2.png')} alt="Card image cap" />
                <CardText>Log in to your personal page and view jobs that match you.</CardText>
              </Card>
            </Col>
            <Col sm="4">
              <Card body className='shadow p-3 mb-5 bg-white rounded'>
                <CardTitle className='titleCard'><strong>Get Your Job</strong></CardTitle>
                <CardImg className= "myImg" top width="100%" src={require('../../assets/card3.jpg')} alt="Card image cap" />
                <CardText>Get shortlisted on the basis of your resume and interview with us.</CardText>
              </Card>
            </Col>
          </Row>
        </Styles>
      </Container>
    </div>
    
  );
};

export default CardHome;