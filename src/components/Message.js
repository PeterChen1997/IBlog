import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import CommentsList from './CommentsList'


class Message extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-sm-center" style={{height: "65vh"}}>
          <Col md={8}>
            <h4>暂未开放</h4>
            <hr/>
          </Col>
        </Row>
        {/* <Row className="justify-content-sm-center">
          <Col md={8}>
            <hr/> 
            <CommentsList />
          </Col>
          
        </Row> */}
        
      </Container>
    )
  }
}

export default Message