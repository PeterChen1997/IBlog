import React from 'react';
import { Container, Row, Col } from 'reactstrap'

const About = () => (
  <Container>
    <Row className="justify-content-sm-center" style={{height: "65vh"}}>
      <Col md={8}>
        <h4>Hi, 我是谌杨</h4>
        <hr/>
        <p>一名学习前端的大三学生</p>
        <h5>这是<a target="_blank" rel="noopener noreferrer" href="https://www.peterchen.club/resume/">我的在线简历</a></h5>
      </Col>
    </Row>
  </Container>
)

export default About;
