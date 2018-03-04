import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import SideBar from './SideBar'
import ArticlesList from './ArticlesList'


class ListDetail extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ size: 12, order: 1 }} sm={{ size: 4, order: 2 }} style={{marginBottom: '40px'}}>
            <SideBar />
          </Col>
          <Col xs={{ size: 12, order: 2 }} sm={{ size: 8, order: 1 }}>
            <ArticlesList type="all"/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListDetail