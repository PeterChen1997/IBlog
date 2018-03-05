import React, { Component } from 'react'
import { Row, Jumbotron, Container, Col } from 'reactstrap'
import logo from '../imgs/logo.png'
import cloud from '../imgs/cloud.png'

import ArticlesList from './ArticlesList'

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron tag="section" className="text-center mb-3 jumbotron-header">
          <Container>
            <Row>
              <Col>
                <p className="lead">
                  <img src={cloud} alt="cloud" id="cloud1" className="cloud"/>
                  <img src={logo} alt="Logo" id="logo"/>
                  <img src={cloud} alt="cloud" id="cloud2" className="cloud"/>
                </p>
                <h1 className="jumbotron-heading display-4">Adventure Park</h1>
                <p className="lead">Stay hungry. Stay foolish</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row className="justify-content-sm-center">
            <ArticlesList sm="8" type="new" />
          </Row>
        </Container>
        
      </div>
      
    )
  }
}

export default Home